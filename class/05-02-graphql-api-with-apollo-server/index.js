import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
  type Query {
      "A simple type for getting started!"
      hello: Int
    }
`;

// A map of functions which return data for the schema.
const resolvers = { //router
    Query: {
        hello: () => 10,
    },
};

//shorthand property로 객체를 표현해도 됨.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(3001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});