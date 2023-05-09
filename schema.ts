export const typeDefs = `
  type User {
    id: String!,
    name: String!
  }
  type Query {
    helloWorld: String!,
    users: [String!]!
  }
  type Mutation {
    createUser(name:String!):String!
  }
`