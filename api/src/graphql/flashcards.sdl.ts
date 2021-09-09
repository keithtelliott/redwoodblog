export const schema = gql`
  type Flashcard {
    id: Int!
    front: String!
    back: String!
    createdAt: DateTime!
  }

  type Query {
    flashcards: [Flashcard!]!
    flashcard(id: Int!): Flashcard
  }

  input CreateFlashcardInput {
    front: String!
    back: String!
  }

  input UpdateFlashcardInput {
    front: String
    back: String
  }

  type Mutation {
    createFlashcard(input: CreateFlashcardInput!): Flashcard!
    updateFlashcard(id: Int!, input: UpdateFlashcardInput!): Flashcard!
    deleteFlashcard(id: Int!): Flashcard!
  }
`
