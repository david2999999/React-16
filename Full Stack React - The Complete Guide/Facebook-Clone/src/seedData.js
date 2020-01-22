import * as data from './data/data';
import * as tables from './tables'
import * as database from './database';

const sequencePromises = function (promises) {
    return promises.reduce((promise, promiseFunction) => {
        return promise.then(() => {
            return promiseFunction();
        });
    }, Promise.resolve());
};

const createDatabase = () => {
    let promises = [
        tables.users, tables.usersFriends, tables.posts
    ].map((table) => {
        return () => database.getSql(table.create().toQuery());
    });

    return sequencePromises(promises);
};