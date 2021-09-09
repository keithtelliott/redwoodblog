import EditFlashcardCell from 'src/components/Flashcard/EditFlashcardCell'

type FlashcardPageProps = {
  id: Int
}

const EditFlashcardPage = ({ id }: FlashcardPageProps) => {
  return <EditFlashcardCell id={id} />
}

export default EditFlashcardPage
