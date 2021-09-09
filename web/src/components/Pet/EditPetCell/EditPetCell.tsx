import type { EditPetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import PetForm from 'src/components/Pet/PetForm'

export const QUERY = gql`
  query EditPetById($id: Int!) {
    pet: pet(id: $id) {
      id
      species
      name
      createdAt
    }
  }
`
const UPDATE_PET_MUTATION = gql`
  mutation UpdatePetMutation($id: Int!, $input: UpdatePetInput!) {
    updatePet(id: $id, input: $input) {
      id
      species
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ pet }: CellSuccessProps<EditPetById>) => {
  const [updatePet, { loading, error }] = useMutation(UPDATE_PET_MUTATION, {
    onCompleted: () => {
      toast.success('Pet updated')
      navigate(routes.pets())
    },
  })

  const onSave = (input, id) => {
    updatePet({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Pet {pet.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PetForm pet={pet} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
