// The spread operator can also be used for objects.2 Using the spread operator with
// objects is similar to using it with arrays. In this example, we’ll use it the same way we
// combined two arrays into a third array, but instead of arrays, we’ll use objects
var morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

var dinner = "mac and cheese";

var backpackingMeals = {
    ...morning,
    dinner
};
console.log(backpackingMeals); // {breakfast: "oatmeal",
                                // lunch: "peanut butter and jelly",
                                // dinner: "mac and cheese"}