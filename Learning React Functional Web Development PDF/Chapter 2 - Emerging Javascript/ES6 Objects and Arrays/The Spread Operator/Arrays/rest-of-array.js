// The spread operator can also be used to get some, or the rest, of the items in the
// array
var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];

var [first, ...rest] = lakes;

console.log(rest.join(", ")); // "Marlette, Fallen Leaf, Cascade"