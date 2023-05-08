import {ApolloServer, gql} from "apollo-server"

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
  # type Mutation {}
`

const server = new ApolloServer({
    typeDefs,
    //resolvers
})

try {
    server.listen().then(({url}) => {
      console.log(`🚀 Server ready at ${url}`)
    })
} catch(e) {
    console.log(e)
    process.exit(1)
}