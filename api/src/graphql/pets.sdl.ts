export const schema = gql`
  type Pet {
    id: Int!
    species: String!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    pets: [Pet!]!
    pet(id: Int!): Pet
  }

  input CreatePetInput {
    species: String!
    name: String!
  }

  input UpdatePetInput {
    species: String
    name: String
  }

  type Mutation {
    createPet(input: CreatePetInput!): Pet!
    updatePet(id: Int!, input: UpdatePetInput!): Pet!
    deletePet(id: Int!): Pet!
  }
`
