import express from 'express';
import basicAuth from 'basic-auth-connect';
import graphqlHTTP from 'express-graphql';
import * as loaders from './src/loaders';
import {NodeInterface, PostType, UserType} from "./src/types";
import { GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLNonNull, GraphQLID } from 'graphql';
import {load} from "babel-register/lib/cache";

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
       },
       node: {
           type: NodeInterface,
           args: {
               id: {
                   type: new GraphQLNonNull(GraphQLID)
               }
           },
           resolve(source, args) {
               return loaders.getNodeById(args.id);
           }
       },

   }
});

const Schema = new GraphQLSchema({
    types: [UserType, PostType],
    query: RootQuery
});

app.use(basicAuth(function(user, pass) {
    return user === '5' && pass === 'mypassword1';
}));

app.use('/graphql', graphqlHTTP((req) => {
   const context = 'users:' + req.user;
   return  { schema: Schema, graphiql: true, context: context, pretty: true };
}));

app.listen(3000, () => {
    console.log({ running: true });
});

