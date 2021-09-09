import EditPetCell from 'src/components/Pet/EditPetCell'

type PetPageProps = {
  id: Int
}

const EditPetPage = ({ id }: PetPageProps) => {
  return <EditPetCell id={id} />
}

export default EditPetPage
