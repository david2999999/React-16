import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLNonNull, GraphQLID } from 'graphql';

const app = express();

const RootQuery = new GraphQLObjectType({
   name: 'RootQuery',
   description: 'The root Query',
   fields: {
       viewer: {
           type: GraphQLString,
           resolve() {
               return 'viewer!';
           }
       }
   }
});

const Schema = new GraphQLSchema({
    query: RootQuery
});

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

let inMemoryStore = {};

const RootMutation = new GraphQLObjectType({
   name: 'RootMutation',
   description: 'The root mutation',
   fields: {
       setNode: {
           type: GraphQLString,
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


app.listen(3000, () => {
    console.log({ running: true });
});

