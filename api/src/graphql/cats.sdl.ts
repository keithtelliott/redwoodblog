export const schema = gql`
  type Cat {
    id: Int!
    breed: String!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    cats: [Cat!]!
    cat(id: Int!): Cat
  }

  input CreateCatInput {
    breed: String!
    name: String!
  }

  input UpdateCatInput {
    breed: String
    name: String
  }

  type Mutation {
    createCat(input: CreateCatInput!): Cat!
    updateCat(id: Int!, input: UpdateCatInput!): Cat!
    deleteCat(id: Int!): Cat!
  }
`
