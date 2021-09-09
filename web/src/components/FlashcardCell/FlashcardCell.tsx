import type { FindFlashcardQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindFlashcardQuery($id: Int!) {
    flashcard: flashcard(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  flashcard,
}: CellSuccessProps<FindFlashcardQuery>) => {
  return (
    <>
      <div>{JSON.stringify(flashcard)}</div>
      <p>Success!</p>
    </>
  )
}
