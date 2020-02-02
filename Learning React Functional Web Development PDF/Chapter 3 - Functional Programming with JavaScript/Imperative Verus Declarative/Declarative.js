const string = "This is the midday show with Cheryl Waters";
const urlFriendly = string.replace(/ /g, "-");

console.log(urlFriendly);

// Here we are using string.replace along with a regular expression to replace all
// instances of spaces with hyphens. Using string.replace is a way of describing what
// is supposed to happen: spaces in the string should be replaced. The details of how
// spaces are dealt with are abstracted away inside the replace function. In a declarative
// program, the syntax itself describes what should happen and the details of how things
// happen are abstracted away.


const loadAndMapMembers = compose(
    combineWith(sessionStorage, "members"),
    save(sessionStorage, "members"),
    scopeMembers(window),
    logMemberInfoToConsole,
    logFieldsToConsole("name.first"),
    countMembersBy("location.state"),
    prepStatesForMapping,
    save(sessionStorage, "map"),
    renderUSMap
);
getFakeMembers(100).then(loadAndMapMembers);

// The declarative approach is more readable and, thus, easier to reason about. The
// details of how each of these functions is implemented are abstracted away. Those tiny
// functions are named well and combined in a way that describes how member data
// goes from being loaded to being saved and printed on a map, and this approach does
// not require many comments. Essentially, declarative programming produces applications
// that are easier to reason about, and when it is easier to reason about an application,
// that application is easier to scale