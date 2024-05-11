"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const JobResolver_1 = require("./resolver/JobResolver");
const cors = require('cors');
const express = require('express');
//@ts-ignore
const auth_js_1 = require("./auth.js");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const type_graphql_1 = require("type-graphql");
const PORT = 9000;
const app = express();
app.use(cors(), express.json(), auth_js_1.authMiddleware);
app.post('/login', auth_js_1.handleLogin);
(0, type_graphql_1.buildSchema)({
    resolvers: [JobResolver_1.JobResolver]
}).then(schema => {
    const apolloServer = new server_1.ApolloServer({ schema });
    app.use('/graphql', (0, express4_1.expressMiddleware)(apolloServer));
    app.listen({ port: PORT }, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`GraphQL server running on http://localhost:${PORT}/graphql`);
    });
});
// // const apolloServer = new ApolloServer({ schema })
// await apolloServer.start();
// app.use('/graphql', apolloMiddleware(apolloServer));
// app.listen({ port: PORT }, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`GraphQL server running on http://localhost:${PORT}/graphql`);
// });
