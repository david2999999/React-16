import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLNonNull, GraphQLID } from 'graphql';

const app = express();
let inMemoryStore = {};

const RootQuery = new GraphQLObjectType({
   name: 'RootQuery',
   description: 'The root Query',
   fields: {
       viewer: {
           type: GraphQLString,
           resolve() {
               return 'viewer!';
           }
       },
       node: {
           type: GraphQLString,
           args: {
               id: {
                   type: new GraphQLNonNull(GraphQLID)
               }
           },
           resolve(source, args) {
               return inMemoryStore[args.key];
           }
       }
   }
});

const RootMutation = new GraphQLObjectType({
   name: 'RootMutation',
   description: 'The root mutation',
   fields: {
       setNode: {
           type: GraphQLString, // return type
           args: {
               id: {
                   type: new GraphQLNonNull(GraphQLID)
               },
               value: {
                   type: new GraphQLNonNull(GraphQLString)
               }
           },
           resolve(source, args) {
               inMemoryStore[args.key] = args.value;
               return inMemoryStore[args.key];
           }
       }
   }
});

const Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(3000, () => {
    console.log({ running: true });
});

