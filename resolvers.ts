import { randomUUID } from "node:crypto"
import { User } from "./models/user"

const users:User[] = []

export const resolvers =  {
    Query: {
      helloWorld: () => {
        return "Hello World!"
      },
      users: () => {
        return users
      }

    },
    Mutation: {
      createUser: (_, args) => {
        users.push({
          id: randomUUID(),
          name: args.name
        })
        return `Hello ${args.name}!`
      }
    }
  }