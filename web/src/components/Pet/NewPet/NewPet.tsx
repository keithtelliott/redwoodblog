import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PetForm from 'src/components/Pet/PetForm'

const CREATE_PET_MUTATION = gql`
  mutation CreatePetMutation($input: CreatePetInput!) {
    createPet(input: $input) {
      id
    }
  }
`

const NewPet = () => {
  const [createPet, { loading, error }] = useMutation(CREATE_PET_MUTATION, {
    onCompleted: () => {
      toast.success('Pet created')
      navigate(routes.pets())
    },
  })

  const onSave = (input) => {
    createPet({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Pet</h2>
      </header>
      <div className="rw-segment-main">
        <PetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPet
