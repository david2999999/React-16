// If you need to transform an object into an array, you can use Array.map in conjunction
// with Object.keys. Object.keys is a method that can be used to return an array
// of keys from an object.
const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
};

const schoolArray = Object.keys(schools).map(key => (
    {
        name: key,
        wins: schools[key]
    }
));

console.log(schoolArray);

// [
    // {
        // name: "Yorktown",
        // wins: 10
    // },
    // {
        // name: "Washington & Lee",
        // wins: 2
    // },
    // {
        // name: "Wakefield",
        // wins: 5
    // }
// ]