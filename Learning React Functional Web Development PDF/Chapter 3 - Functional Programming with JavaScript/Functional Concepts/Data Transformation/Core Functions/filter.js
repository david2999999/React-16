const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
];

// If we wanted to create a function that creates a new array of the schools that begin
// with the letter “W”, we could use the Array.filter method:
const wSchools = schools.filter(school => school[0] === "W");

console.log( wSchools );
// ["Washington & Lee", "Wakefield"]


// Array.filter is a built-in JavaScript function that produces a new array from a
// source array. This function takes a predicate as its only argument. A predicate is a
// function that always returns a Boolean value: true or false. Array.filter invokes
// this predicate once for every item in the array. That item is passed to the predicate as
// an argument and the return value is used to decide if that item shall be added to the
// new array. In this case, Array.filter is checking every school to see if its name
// begins with a “W”.

// When it is time to remove an item from an array we should use Array.filter over
// Array.pop or Array.splice because Array.filter is immutable.