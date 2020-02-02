let list = [
    { title: "Rad Red"},
    { title: "Lawn" },
    { title: "Party Pink"}
];

var addColor = function(title, colors) {
    colors.push({ title: title });
    return colors;
};

console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 4

// However, Array.push is not an immutable function. This addColor function changes
// the original array by adding another field to it.