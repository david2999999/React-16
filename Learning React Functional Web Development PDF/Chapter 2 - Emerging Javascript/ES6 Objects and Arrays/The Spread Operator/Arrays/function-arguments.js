function directions(...args) {
    var [start, ...remaining] = args;
    var [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}

directions(
    "Truckee",
    "Tahoe City",
    "Sunnyside",
    "Homewood",
    "Tahoma"
);

// The directions function takes in the arguments using the spread operator. The first
// argument is assigned to the start variable. The last argument is assigned to a finish
// variable using Array.reverse. We then use the length of the arguments array to display
// how many towns we’re going through. The number of stops is the length of the
// arguments array minus the finish stop. This provides incredible flexibility because
// we could use the directions function to handle any number of stops.