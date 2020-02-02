const string = "This is the midday show with Cheryl Waters";
const urlFriendly = string.replace(/ /g, "-");

console.log(urlFriendly);

// Here we are using string.replace along with a regular expression to replace all
// instances of spaces with hyphens. Using string.replace is a way of describing what
// is supposed to happen: spaces in the string should be replaced. The details of how
// spaces are dealt with are abstracted away inside the replace function. In a declarative
// program, the syntax itself describes what should happen and the details of how things
// happen are abstracted away.