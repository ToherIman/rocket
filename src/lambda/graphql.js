import { ApolloServer, gql } from "apollo-server-lambda";
import User from "./dataSources/users";
import { config } from 'dotenv';

config();

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true
});

client.connect();

const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }
  type User {
    _id: ID
    name: String
    email: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world!";
    },
    users: async (parent, args, { dataSources, verified }, info)  => {
      const record = await dataSources.userAPI.getAllUsers();
      return record;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  origin: '*',
  credentials: true,
  dataSources: () => ({
    userAPI: new User(client.db().collection("users")),
  }),
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
