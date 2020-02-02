const addColor = (title, array) => array.concat({title});

console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 3

// Array.concat concatenates arrays. In this case, it takes a new object, with a new color
// title, and adds it to a copy of the original array.


// You can also use the ES6 spread operator to concatenate arrays in the same way it can
// be used to copy objects. Here is the emerging JavaScript equivalent of the previous
// addColor function:
const addColor = (title, list) => [...list, {title}];