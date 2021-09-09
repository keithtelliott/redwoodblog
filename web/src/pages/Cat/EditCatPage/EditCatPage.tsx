import EditCatCell from 'src/components/Cat/EditCatCell'

type CatPageProps = {
  id: Int
}

const EditCatPage = ({ id }: CatPageProps) => {
  return <EditCatCell id={id} />
}

export default EditCatPage
