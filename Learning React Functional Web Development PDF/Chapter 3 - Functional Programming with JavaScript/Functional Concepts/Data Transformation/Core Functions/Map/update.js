// If you need to create a pure function that changes one object in an array of objects,
// map can be used for this, too. In the following example, we will change the school with
// the name of “Stratford” to “HB Woodlawn” without mutating the schools array:
let schools = [
    { name: "Yorktown"},
    { name: "Stratford" },
    { name: "Washington & Lee"},
    { name: "Wakefield"}
];
let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

console.log( updatedSchools[1] );  // { name: "HB Woodlawn" }
console.log( schools[1] ); // { name: "Stratford" },

const editName = (oldName, name, arr) => (
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            }
        } else {
            return item;
        }
    })
);

const editName2 = (oldName, name, arr) => (
    arr.map(item => (item.name === oldName) ?
        ({...item, name}) :
        item
    )
);