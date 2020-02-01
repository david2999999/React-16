var peaks = ["Tallac", "Ralston", "Rose"];
var [last] = peaks.reverse();

console.log(last); // Rose
console.log(peaks.join(', ')); // Rose, Ralston, Tallac

// The reverse function has actually altered or mutated the array.
// In a world with the spread operator, we don’t have to mutate the original array; we
// can create a copy of the array and then reverse it:
var peaks = ["Tallac", "Ralston", "Rose"];
var [last] = [...peaks].reverse();

console.log(last); // Rose
console.log(peaks.join(', ')); // Tallac, Ralston, Rose