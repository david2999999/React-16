import {
    GraphQLInterfaceType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';
import * as tables from './sqlite/tables';
import * as loaders from './loaders';

const PageInfoType = new GraphQLObjectType({
    name: 'PageInfo',
    fields: {
        hasNextPage: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        hasPreviousPage: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        startCursor: {
            type: GraphQLString
        },
        endCursor: {
            type: GraphQLString
        }
    }
});

const PostEdgeType = new GraphQLObjectType({
    name: 'PostEdge',
    fields: () => {
        return {
            cursor: {
                type: new GraphQLNonNull(GraphQLString)
            },
            node: {
                type: new GraphQLNonNull(PostType)
            }
        }
    }
});

export const NodeInterface = new GraphQLInterfaceType({
    name: 'Node',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolveType: (source) => {
        if (source.__tableName === tables.users.getName()) {
            return UserType;
        }

        return PostType;
    }
});

const resolveId = (source) => {
    return tables.dbIdToNodeId(source.id, source.__tableName);
};

export const UserType = new GraphQLObjectType({
    name: 'User',
    interfaces: [NodeInterface],
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                resolve: resolveId
            },
            name: { type: new GraphQLNonNull(GraphQLString) },
            about: { type: new GraphQLNonNull(GraphQLString) },
            // friends: {
            //     type: new GraphQLList(GraphQLID),
            //     resolve(source) {
            //         // if the source already retrieved the user's friend list along with the
            //         // user's information already
            //         if (source.__friends) {
            //             return source.__friends.map((row) => {
            //                 return tables.dbIdToNodeId(row.user_id_b, row.__tableName);
            //             });
            //         }
            //
            //         return loaders.getFriendIdsForUser(source).then((rows) => {
            //             return rows.map((row) => {
            //                 return tables.dbIdToNodeId(row.user_id_b, row.__tableName);
            //             });
            //         })
            //     }
            // }
            friends: {
                type: new GraphQLList(UserType),
                resolve(source) {
                    return loaders.getFriendIdsForUser(source).then((rows) => {
                        const promises = rows.map((row) => {
                            const friendNodeId = tables.dbIdToNodeId(row.user_id_b, row.__tableName);
                            return loaders.getNodeById(friendNodeId);
                        });

                        return Promise.all(promises);
                    })
                }
            }
        }
    }
});

export const PostType = new GraphQLObjectType({
    name: 'Post',
    interfaces: [NodeInterface],
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: resolveId
        },
        createdAt: {
            type: new GraphQLNonNull(GraphQLString)
        },
        body: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});