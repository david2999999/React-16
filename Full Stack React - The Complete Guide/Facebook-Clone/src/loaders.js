import * as database from './sqlite/database';
import * as tables from './sqlite/tables';

import DataLoader from 'dataloader';

const createNodeLoader = (table) => {
    return new DataLoader((ids) => {
        const query = table
            .select(table.star())
            .where(table.id.in(ids))
            .toQuery();

        return database.getSql(query).then((rows) => {
            rows.forEach((row) => {
                row.__tableName = table.getName();
            });

            return rows;
        });
    });
};

const nodeLoaders = {
    users: createNodeLoader(tables.users),
    posts: createNodeLoader(tables.posts),
    usersFriends: createNodeLoader(tables.usersFriends)
};

export const getNodeById = (nodeId) => {
    const { tableName, dbId } = tables.splitNodeId(nodeId);

    const table = tables[tableName];
    const query = table
        .select(table.star())
        .where(table.id.equals(dbId))
        .limit(1)
        .toQuery();

    return database.getSql(query).then((rows) => {
        if (rows[0]) {
            rows[0].__tableName = tableName;
        }

        return rows[0];
    })
};

export const getFriendIdsForUser = (userSource) => {
    const table = tables.usersFriends;
    const query = table
        .select(table.user_id_b)
        .where(table.user_id_a.equals(userSource.id))
        .toQuery();

    return database.getSql(query).then((rows) => {
        console.log(rows);
        rows.forEach((row) => {
            row.__tableName = tables.users.getName();
        });

        return rows;
    });
};

export const getPostIdsForUser = (userSource, args, context) => {
    let { after, first } = args;
    if (!first) first = 2;

    const table = tables.posts;
    let query = table
        .select(table.id, table.created_at, table.level)
        .where(table.user_id.equals(userSource.id))
        .order(table.created_at.asc)
        .limit(first + 10);

    if (after) {
        const [id, created_at] = after.split(':');
        query = query
            .where(table.created_at.gt(created_at))
            .where(table.id.gt(id));
    }

    return Promise.all([
        database.getSql(query.toQuery()),
        getFriendshipLevels(context)
    ]).then(([ allRows, friendshipLevels ]) => {
        allRows = allRows.filter((row) => {
            return canAccessLevel(friendshipLevels[userSource.id], row.level);
        });

        const rows = allRows.slice(0, first);

        rows.forEach((row) => {
            row.__tableName = tables.posts.getName();
            row.__cursor = row.id + ":" + row.created_at;
        });

        const hasNextPage = allRows.length > first;
        const hasPreviousPage = false;

        const pageInfo = {
            hasNextPage: hasNextPage,
            hasPreviousPage: hasPreviousPage
        };

        if (rows.length > 0) {
            pageInfo.startCursor = rows[0].__cursor;
            pageInfo.endCursor = rows[rows.length - 1].__cursor;
        }

        return {rows, pageInfo};
    });
};

const getFriendshipLevels = (nodeId) => {
    const { dbId } = tables.splitNodeId(nodeId);

    const table = tables.usersFriends;
    let query = table
        .select(table.star())
        .where(table.user_id_a.equals(dbId));

    return database.getSql(query.toQuery()).then((rows) => {
        const levelMap = {};
        rows.forEach((row) => {
            levelMap[row.user_id_b] = row.level;
        });

        return levelMap;
    })
};

const canAccessLevel = (viewerLevel, contentLevel) => {
    const levels = ['public', 'acquaintance', 'friend', 'top'];
    const viewerLevelIndex = levels.indexOf(viewerLevel);
    const contentLevelIndex = levels.indexOf(contentLevel);

    return viewerLevelIndex >= contentLevelIndex;
};

export const createPost = (body, level, context) => {
    const { dbId } = tables.splitNodeId(context);
    const created_at = new Date().toISOString().split('T')[0];
    const posts = [{
       body, level, created_at, user_id: dbId
    }];

    let query = tables.posts.insert(posts).toQuery();

    return database.getSql(query).then(() => {
        return database.getSql({
            text: 'SELECT last_insert_rowid() AS id FROM posts'
        });
    }).then((ids) => {
        return tables.dbIdToNodeId(ids[0].id, tables.posts.getName());
    })
};



// instead of retrieving first the user's information and then retrieving the user's
// friend list in two separate calls. This function retrieves both the user's information
// and all of the user's friend list.
export const getUserNodeWithFriends = (nodeId) => {
  const { tableName, dbId } = tables.splitNodeId(nodeId);

  const query = tables.users
      .select(tables.usersFriends.user_id_b, tables.users.star())
      .from(
          tables.users.leftJoin(tables.usersFriends)
              .on(tables.usersFriends.user_id_a.equals(tables.users.id))
      )
      .where(tables.users.id.equals(dbId))
      .toQuery();

    return database.getSql(query).then((rows) => {
        if (!rows[0]) { // if there are no user
            return undefined;
        }

        const __friends = rows.map((row) => {
            return {
                user_id_b: row.user_id_b,
                __tableName: tables.users.getName()
            }
        });

        const source = {
            id: rows[0].id,
            name: rows[0].name,
            about: rows[0].about,
            __tableName: tableName,
            __friends: __friends
        };

        return source;
    });
};












