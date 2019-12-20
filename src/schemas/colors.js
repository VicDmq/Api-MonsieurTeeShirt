import { gql } from 'apollo-server-express'

const colorSchema = gql`
  extend type Query {
    getColors: [Color]
  }

  extend type Mutation {
    addColor(name: String!, hexa: String!): Color
  }

  type Color {
    idColor: Int!
    name: String!
    hexa: String!
  }
`

export default colorSchema
