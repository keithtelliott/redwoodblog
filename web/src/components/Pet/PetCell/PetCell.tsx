import type { FindPetById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pet from 'src/components/Pet/Pet'

export const QUERY = gql`
  query FindPetById($id: Int!) {
    pet: pet(id: $id) {
      id
      species
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Pet not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ pet }: CellSuccessProps<FindPetById>) => {
  return <Pet pet={pet} />
}
