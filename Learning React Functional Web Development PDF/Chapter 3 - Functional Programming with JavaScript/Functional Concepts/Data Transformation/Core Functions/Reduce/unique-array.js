const colors = ["red", "red", "green", "blue", "green"];

const distinctColors = colors.reduce(
    (distinct, color) => {
        return (distinct.indexOf(color) !== -1) ?
            distinct :
            [...distinct, color]
    }, []
);

console.log(distinctColors);
// ["red", "green", "blue"]

// argument sent to the reduce function is an empty array. This will be the initial value
// for distinct. When the distinct array does not already contain a specific color, it
// will be added. Otherwise, it will be skipped, and the current distinct array will be
// returned.