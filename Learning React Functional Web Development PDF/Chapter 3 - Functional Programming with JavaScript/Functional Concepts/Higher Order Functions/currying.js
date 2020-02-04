// The following is an example of currying. The userLogs function hangs on to some
// information (the username) and returns a function that can be used and reused when
// the rest of the information (the message) is made available

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length()} members`),
    error => log("Encountered an error loading members")
);

// grandpa23 -> attempted to load 20 fake members
// grandpa23 -> successfully loaded 20 members
// grandpa23 -> attempted to load 20 fake members
// grandpa23 -> encountered an error loading members