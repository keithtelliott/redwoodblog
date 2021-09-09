import type { EditFlashcardById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FlashcardForm from 'src/components/Flashcard/FlashcardForm'

export const QUERY = gql`
  query EditFlashcardById($id: Int!) {
    flashcard: flashcard(id: $id) {
      id
      front
      back
      createdAt
    }
  }
`
const UPDATE_FLASHCARD_MUTATION = gql`
  mutation UpdateFlashcardMutation($id: Int!, $input: UpdateFlashcardInput!) {
    updateFlashcard(id: $id, input: $input) {
      id
      front
      back
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ flashcard }: CellSuccessProps<EditFlashcardById>) => {
  const [updateFlashcard, { loading, error }] = useMutation(UPDATE_FLASHCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Flashcard updated')
      navigate(routes.flashcards())
    },
  })

  const onSave = (input, id) => {
    updateFlashcard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Flashcard {flashcard.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FlashcardForm flashcard={flashcard} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
