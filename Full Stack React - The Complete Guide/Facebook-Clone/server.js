import express from 'express';
import basicAuth from 'basic-auth-connect';
import graphqlHTTP from 'express-graphql';
import * as loaders from './src/loaders';
import {NodeInterface, PostType, UserType} from "./src/types";
import { GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLNonNull, GraphQLID } from 'graphql';

const app = express();

const RootQuery = new GraphQLObjectType({
   name: 'RootQuery',
   description: 'The root Query',
   fields: {
       viewer: {
           type: NodeInterface,
           resolve(source, args, context) {
               return loaders.getNodeById(context);
           }
       }
   }
});

const Schema = new GraphQLSchema({
    types: [UserType, PostType],
    query: RootQuery
});

app.use(basicAuth(function(user, pass) {
    return user === '1' && pass === 'mypassword1';
}));

app.use('/graphql', graphqlHTTP((req) => {
   const context = 'users:' + req.user;
   return  { schema: Schema, graphiql: true, context: context, pretty: true };
}));

app.listen(3000, () => {
    console.log({ running: true });
});

