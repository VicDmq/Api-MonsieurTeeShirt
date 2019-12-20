import { gql } from 'apollo-server-express'

import colorSchema from './colors'
import productSchema from './products'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

const schema = [linkSchema, colorSchema, productSchema]

export default schema
