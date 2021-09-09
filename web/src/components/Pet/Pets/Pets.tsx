import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Pet/PetsCell'

const DELETE_PET_MUTATION = gql`
  mutation DeletePetMutation($id: Int!) {
    deletePet(id: $id) {
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

const PetsList = ({ pets }) => {
  const [deletePet] = useMutation(DELETE_PET_MUTATION, {
    onCompleted: () => {
      toast.success('Pet deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete pet ' + id + '?')) {
      deletePet({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Species</th>
            <th>Name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{truncate(pet.id)}</td>
              <td>{truncate(pet.species)}</td>
              <td>{truncate(pet.name)}</td>
              <td>{timeTag(pet.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.pet({ id: pet.id })}
                    title={'Show pet ' + pet.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPet({ id: pet.id })}
                    title={'Edit pet ' + pet.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete pet ' + pet.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(pet.id)}
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

export default PetsList
