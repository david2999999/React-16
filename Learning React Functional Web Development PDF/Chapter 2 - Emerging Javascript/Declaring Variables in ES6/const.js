// Before constants, all we had were variables, and variables could be overwritten:

var pizza = true;
pizza = false;
console.log(pizza);

// We cannot reset the value of a constant variable, and it will generate a console error
const pizzaConst = true;
// pizzaConst = false;