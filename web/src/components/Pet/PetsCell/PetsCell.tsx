import type { FindPets } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Pets from 'src/components/Pet/Pets'

export const QUERY = gql`
  query FindPets {
    pets {
      id
      species
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pets yet. '}
      <Link
        to={routes.newPet()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ pets }: CellSuccessProps<FindPets>) => {
  return <Pets pets={pets} />
}
