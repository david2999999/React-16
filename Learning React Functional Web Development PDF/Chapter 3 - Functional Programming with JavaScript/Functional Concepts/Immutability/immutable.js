let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

var rateColor = function(color, rating) {
    return Object.assign({}, color, {rating:rating})
};

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 4

// Here, we used Object.assign to change the color rating. Object.assign is the copy
// machine; it takes a blank object, copies the color to that object, and overwrites the
// rating on the copy. Now we can have a newly rated color object without having to
// change the original.

// We can write the same function using an ES6 arrow function along with the ES7
// object spread operator. This rateColor function uses the spread operator to copy the
// color into a new object and then overwrite its rating
const rateColor = (color, rating) => ({
        ...color,
        rating
    });