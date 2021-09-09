import PetCell from 'src/components/Pet/PetCell'

type PetPageProps = {
  id: Int
}

const PetPage = ({ id }: PetPageProps) => {
  return <PetCell id={id} />
}

export default PetPage
