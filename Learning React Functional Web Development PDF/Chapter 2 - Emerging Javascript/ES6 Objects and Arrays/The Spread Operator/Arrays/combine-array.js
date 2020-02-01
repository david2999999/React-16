// First, the spread operator allows us to combine the contents of arrays. For example, if we had
// two arrays, we could make a third array that combines the two arrays into one:
var peaks = ["Tallac", "Ralston", "Rose"];
var canyons = ["Ward", "Blackwood"];
var tahoe = [...peaks, ...canyons];

console.log(tahoe.join(', ')); // Tallac, Ralston, Rose, Ward, Blackwood