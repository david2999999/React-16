// The code pulls bread and meat out of the object and creates local variables for them.
// Also, the bread and meat variables can be changed:
var {bread, meat} = sandwich;

bread = "garlic";
meat = "turkey";

console.log(bread); // garlic
console.log(meat); // turkey

console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna