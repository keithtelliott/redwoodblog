import FlashcardCell from 'src/components/Flashcard/FlashcardCell'

type FlashcardPageProps = {
  id: Int
}

const FlashcardPage = ({ id }: FlashcardPageProps) => {
  return <FlashcardCell id={id} />
}

export default FlashcardPage
