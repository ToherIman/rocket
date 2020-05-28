const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  origin: '*',
  credentials: true
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
