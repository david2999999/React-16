let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

// We could build a function that would rate colors, and use that function to change the
// rating of the color object:

function rateColor(color, rating) {
    color.rating = rating;
    return color;
}

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5

// In JavaScript, function arguments are references to the actual data. Setting the color’s
// rating like this is bad because it changes or mutates the original color object. (Imagine
// if you tasked a business with redacting and sharing your birth certificate and they
// returned your original birth certificate with black marker covering the important
// details. You’d hope that a business would have the common sense to make a copy of
// your birth certificate and return the original unharmed.)