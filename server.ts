import {ApolloServer} from "apollo-server"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"

const server = new ApolloServer({
    typeDefs,
    resolvers
})

try {
    server.listen().then(({url}) => {
      console.log(`🚀 Server ready at ${url}`)
    })
} catch(e) {
    console.log(e)
    process.exit(1)
}