// Values can also be destructured from arrays. Imagine that we wanted to assign the
// first value of an array to a variable name:
var [firstResort] = ["Kirkwood", "Squaw", "Alpine"];

console.log(firstResort); // Kirkwood

// We can also pass over unnecessary values with list matching using commas. List
// matching occurs when commas take the place of elements that should be skipped.
// With the same array, we can access the last value by replacing the first two values with
// commas:
var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"];

console.log(thirdResort); // Alpine