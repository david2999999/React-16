// Functions can be sent to other functions as arguments, just like other variables:
const insideFn = logger =>
    logger("They can be sent to other functions as arguments");
insideFn(message => console.log(message));
// They can be sent to other functions as arguments