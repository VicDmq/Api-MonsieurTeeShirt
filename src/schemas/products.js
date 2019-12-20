import { gql } from 'apollo-server-express'

const productSchema = gql`
  extend type Query {
    getProducts: [Product]
  }

  extend type Mutation {
    addProduct(name: String!): Product
  }

  type Product {
    idProduct: Int!
    name: String!
  }
`

export default productSchema
