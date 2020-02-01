
// Functions can be sent to other functions as arguments, just like other variables:
const insideFn = logger =>
    logger("They can be sent to other functions as arguments");
insideFn(message => console.log(message));
// They can be sent to other functions as arguments

// ============================================================================
var createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!");
    }
};
const scream = createScream(message => console.log(message));
scream('functions can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');
// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
// CREATESCREAM RETURNS A FUNCTION!!!
// SCREAM INVOKES THAT RETURNED FUNCTION!!!

const createScream = logger => message =>
    logger(message.toUpperCase() + "!!!");