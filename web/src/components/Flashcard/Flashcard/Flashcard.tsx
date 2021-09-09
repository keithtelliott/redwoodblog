import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FLASHCARD_MUTATION = gql`
  mutation DeleteFlashcardMutation($id: Int!) {
    deleteFlashcard(id: $id) {
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

const Flashcard = ({ flashcard }) => {
  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Flashcard deleted')
      navigate(routes.flashcards())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete flashcard ' + id + '?')) {
      deleteFlashcard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Flashcard {flashcard.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{flashcard.id}</td>
            </tr><tr>
              <th>Front</th>
              <td>{flashcard.front}</td>
            </tr><tr>
              <th>Back</th>
              <td>{flashcard.back}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(flashcard.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFlashcard({ id: flashcard.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(flashcard.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Flashcard
