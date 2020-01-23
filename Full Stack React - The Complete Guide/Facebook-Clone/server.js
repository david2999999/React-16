import express from 'express';
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
       }
   }
});

const RootMutation = new GraphQLObjectType({
   name: 'RootMutation',
   description: 'The root mutation'
});

const Schema = new GraphQLSchema({
    types: [UserType, PostType],
    query: RootQuery,
    mutation: RootMutation
});

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(3000, () => {
    console.log({ running: true });
});

