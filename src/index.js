import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import models from './models/index'
import schemas from './schemas/index'
import resolvers from './resolvers/index'

const app = express()
app.use(cors())

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: {
    models
  }
})
server.applyMiddleware({ app, path: '/' })

app.listen({ port: 3000 }, () => {
  console.log('Listening on http://localhost:3000')
})
