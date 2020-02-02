const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
];

// We can get a comma-delimited list of these and some other strings by using the
// Array.join function

console.log( schools.join(", ") );
// "Yorktown, Washington & Lee, Wakefield"

// join is a built-in JavaScript array method that we can use to extract a delimited string
// from our array. The original array is still intact; join simply provides a different take
// on it. The details of how this string is produced are abstracted away from the programmer.