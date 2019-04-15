var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

//GraphQL schema
var schema = buildSchema(
    `
    type Query {
        message: String
    }
`  
);

//Root resolver
var root = {
    message : () => 'Hello World!'
};

//Create an express server and a GraphQL endpoint

var app = express();
app.use('/graphql', express_graphql({
    schema: schema, //The GraphQL schema which should be attached to the specific endpoint
    rootValue: root, //The root resolver object
    graphiql: true // Must be set to true to enable the GraphiQL tool when accessing the endpoint in the browser. GraphiQL is a graphical interactive in-browser GraphQL IDE. By using this tool you can directly write your queries in the browser and try out the endpoint.
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql')); //is called to start the server process on port 4000.