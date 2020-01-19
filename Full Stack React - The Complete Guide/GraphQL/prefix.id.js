const findNode = (id) => {
    const [prefix, dbId] = id.split(":");
    if (prefix === 'users') {
        return database.usersTable.find(dbId);
    }
};

const getUser = (id) => {
    let user = database.usersTable.find(id);
    user.id = `users:${user.id}`;
    return user;
};