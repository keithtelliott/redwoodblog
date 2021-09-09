import type { EditCatById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CatForm from 'src/components/Cat/CatForm'

export const QUERY = gql`
  query EditCatById($id: Int!) {
    cat: cat(id: $id) {
      id
      breed
      name
      createdAt
    }
  }
`
const UPDATE_CAT_MUTATION = gql`
  mutation UpdateCatMutation($id: Int!, $input: UpdateCatInput!) {
    updateCat(id: $id, input: $input) {
      id
      breed
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ cat }: CellSuccessProps<EditCatById>) => {
  const [updateCat, { loading, error }] = useMutation(UPDATE_CAT_MUTATION, {
    onCompleted: () => {
      toast.success('Cat updated')
      navigate(routes.cats())
    },
  })

  const onSave = (input, id) => {
    updateCat({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Cat {cat.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CatForm cat={cat} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
