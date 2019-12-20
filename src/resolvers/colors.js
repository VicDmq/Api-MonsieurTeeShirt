const colorResolvers = {
  Query: {
    getColors: (parent, args, { models: { colors } }) => {
      return colors
    }
  },

  Mutation: {
    addColor: (parent, { name, hexa }, { models: { colors } }) => {
      const color = {
        idColor: colors.length + 1,
        name,
        hexa
      }

      colors.push(color)

      return color
    }
  }
}

export default colorResolvers
