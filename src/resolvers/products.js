const productResolvers = {
  Query: {
    getProducts: (parent, args, { models: { products } }) => {
      return products
    }
  },

  Mutation: {
    addProduct: (parent, { name }, { models: { products } }) => {
      const product = {
        idProduct: products.length + 1,
        name
      }

      products.push(product)

      return product
    }
  }
}

export default productResolvers
