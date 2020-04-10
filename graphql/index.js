const { ApolloServer } = require('apollo-server-koa');
const { typeDefs } = require('./typeDef')
const { resolvers } = require('./resolver')

const apollo = new ApolloServer(
    {
        typeDefs,
        resolvers,
    }
)

module.exports = { apollo }