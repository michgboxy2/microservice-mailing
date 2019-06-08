const server = require('express')();
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const bodyparser = require('body-parser');
const {makeExecutableSchema}         = require('graphql-tools');
const expressGraphQL = require('express-graphql');
const schema         = require('./data/schema');
const {port} = require('./config');






server
    .use(bodyparser.json())
    .use(bodyparser.urlencoded({extended : true}))
    .use('/graphql', expressGraphQL({
        schema,
        graphiql : true,
        rootValue : global
    }))
    .listen(port, () => {
        console.log(`listening on ${port}`);
    });