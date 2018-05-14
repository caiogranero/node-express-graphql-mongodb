const { makeExecutableSchema } = require('graphql-tools');
const readGraphQL = require('./require-graphql-files');
const resolvers = require('./resolvers');

const types = readGraphQL('./graphql/types');

module.exports = makeExecutableSchema({
  typeDefs: [...types],
  resolvers,
});
