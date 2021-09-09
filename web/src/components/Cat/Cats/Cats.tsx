import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Cat/CatsCell'

const DELETE_CAT_MUTATION = gql`
  mutation DeleteCatMutation($id: Int!) {
    deleteCat(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CatsList = ({ cats }) => {
  const [deleteCat] = useMutation(DELETE_CAT_MUTATION, {
    onCompleted: () => {
      toast.success('Cat deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete cat ' + id + '?')) {
      deleteCat({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Breed</th>
            <th>Name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat) => (
            <tr key={cat.id}>
              <td>{truncate(cat.id)}</td>
              <td>{truncate(cat.breed)}</td>
              <td>{truncate(cat.name)}</td>
              <td>{timeTag(cat.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.cat({ id: cat.id })}
                    title={'Show cat ' + cat.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCat({ id: cat.id })}
                    title={'Edit cat ' + cat.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete cat ' + cat.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(cat.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CatsList
