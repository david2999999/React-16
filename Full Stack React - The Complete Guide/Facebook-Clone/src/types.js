import {
    GraphQLInterfaceType,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import * as tables from './tables';

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