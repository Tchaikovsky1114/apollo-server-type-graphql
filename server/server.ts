import 'reflect-metadata';
import JobResolver from './src/resolver/JobResolver';
const cors = require('cors');
const express = require('express');
//@ts-ignore
import { authMiddleware, handleLogin } from './src/auth';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import { buildSchema } from 'type-graphql';

const PORT = 9000;
const app = express();

app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

buildSchema({
  resolvers: [JobResolver]
}).then(async(schema) => {
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  app.use('/graphql', apolloMiddleware(apolloServer));
  app.listen({ port: PORT }, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL server running on http://localhost:${PORT}/graphql`);
  });
})

// // const apolloServer = new ApolloServer({ schema })

// app.use('/graphql', apolloMiddleware(apolloServer));

// app.listen({ port: PORT }, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`GraphQL server running on http://localhost:${PORT}/graphql`);
// });
