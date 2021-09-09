import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CAT_MUTATION = gql`
  mutation DeleteCatMutation($id: Int!) {
    deleteCat(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Cat = ({ cat }) => {
  const [deleteCat] = useMutation(DELETE_CAT_MUTATION, {
    onCompleted: () => {
      toast.success('Cat deleted')
      navigate(routes.cats())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete cat ' + id + '?')) {
      deleteCat({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Cat {cat.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{cat.id}</td>
            </tr><tr>
              <th>Breed</th>
              <td>{cat.breed}</td>
            </tr><tr>
              <th>Name</th>
              <td>{cat.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(cat.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCat({ id: cat.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cat.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Cat
