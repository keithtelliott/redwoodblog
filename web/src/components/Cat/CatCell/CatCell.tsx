import type { FindCatById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Cat from 'src/components/Cat/Cat'

export const QUERY = gql`
  query FindCatById($id: Int!) {
    cat: cat(id: $id) {
      id
      breed
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Cat not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ cat }: CellSuccessProps<FindCatById>) => {
  return <Cat cat={cat} />
}
