// Consider this sandwich object. It has four keys, but we only want to use the values of
// two. We can scope bread and meat to be used locally

var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

var {bread, meat} = sandwich;

console.log(bread, meat); // dutch crunch tuna