import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CatForm from 'src/components/Cat/CatForm'

const CREATE_CAT_MUTATION = gql`
  mutation CreateCatMutation($input: CreateCatInput!) {
    createCat(input: $input) {
      id
    }
  }
`

const NewCat = () => {
  const [createCat, { loading, error }] = useMutation(CREATE_CAT_MUTATION, {
    onCompleted: () => {
      toast.success('Cat created')
      navigate(routes.cats())
    },
  })

  const onSave = (input) => {
    createCat({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Cat</h2>
      </header>
      <div className="rw-segment-main">
        <CatForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCat
