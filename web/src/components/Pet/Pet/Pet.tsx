import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PET_MUTATION = gql`
  mutation DeletePetMutation($id: Int!) {
    deletePet(id: $id) {
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

const Pet = ({ pet }) => {
  const [deletePet] = useMutation(DELETE_PET_MUTATION, {
    onCompleted: () => {
      toast.success('Pet deleted')
      navigate(routes.pets())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete pet ' + id + '?')) {
      deletePet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Pet {pet.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pet.id}</td>
            </tr><tr>
              <th>Species</th>
              <td>{pet.species}</td>
            </tr><tr>
              <th>Name</th>
              <td>{pet.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(pet.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPet({ id: pet.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pet.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Pet
