// With object literal enhancement, we can grab variables
// from the global scope and turn them into an object:
var name = "Tallac";
var elevation = 9738;
var funHike = {name,elevation};

console.log(funHike); // {name: "Tallac", elevation: 9738}