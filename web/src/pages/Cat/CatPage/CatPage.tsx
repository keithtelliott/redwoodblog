import CatCell from 'src/components/Cat/CatCell'

type CatPageProps = {
  id: Int
}

const CatPage = ({ id }: CatPageProps) => {
  return <CatCell id={id} />
}

export default CatPage
