import type { FindCats } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Cats from 'src/components/Cat/Cats'

export const QUERY = gql`
  query FindCats {
    cats {
      id
      breed
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cats yet. '}
      <Link
        to={routes.newCat()}
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

export const Success = ({ cats }: CellSuccessProps<FindCats>) => {
  return <Cats cats={cats} />
}
