// deepPick can be used to access Dan’s type, stored immediately in the first object, or to
// dig down into nested objects to locate Dan’s first name. Sending a string that uses dot
// notation, we can specify where to locate values that are nested deep within an object

// The deepPick function is either going to return a value or recall itself, until it eventually
// returns a value. First, this function splits the dot-notated fields string into an
// array and uses array destructuring to separate the first value from the remaining values.
// If there are remaining values, deepPick recalls itself with slightly different data,
// allowing it to dig one level deeper
const deepPick = (fields, object={}) => {
    const [first, ...remaining] = fields.split(".");
    return (remaining.length) ?
        deepPick(remaining.join("."), object[first]) :
        object[first];
};

let dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"

// First Iteration
// first = "data"
// remaining.join(".") = "info.fullname.first"
// object[first] = { gender: "male", {info} }

// Second Iteration
// first = "info"
// remaining.join(".") = "fullname.first"
// object[first] = {id: 22, {fullname}}

// Third Iteration
    // first = "fullname"
    // remaining.join("." = "first"
    // object[first] = {first: "Dan", last: "Deacon" }

// Finally...
// first = "first"
// remaining.length = 0
// object[first] = "Deacon"

