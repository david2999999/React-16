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
           // resolve(source, args, context, info) {
           //     let includeFriends = false;
           //
           //     const selectionFragments = info.fieldASTs[0].selectionSet.selections;
           //     const userSelections = selectionFragments.filter((selection) => {
           //         return selection.kind === 'InlineFragment' &&
           //                selection.typeCondition.name.value === 'User';
           //     });
           //
           //     userSelections.forEach((selection) => {
           //         selection.selectionSet.selections.forEach((innerSelection) => {
           //             if (innerSelection.name.value === 'friends') {
           //                 includeFriends = true;
           //             }
           //         });
           //     });
           //
           //     if (includeFriends) {
           //         return loaders.getUserNodeWithFriends(args.id);
           //     } else {
           //         return loaders.getNodeById(args.id);
           //     }
           // }
           resolve(source, args, context, info) {
               return loaders.getNodeById(args.id);
           }
       }
   }
});

const Schema = new GraphQLSchema({
    types: [UserType, PostType],
    query: RootQuery
});

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(3000, () => {
    console.log({ running: true });
});

