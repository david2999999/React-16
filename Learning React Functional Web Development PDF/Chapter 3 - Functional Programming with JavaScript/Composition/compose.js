// Compose takes in functions as arguments and returns a single function. In this
// implementation, the spread operator is used to turn those function arguments into an
// array called fns. A function is then returned that expects one argument, arg. When
// this function is invoked, the fns array is piped starting with the argument we want to
// send through the function. The argument becomes the initial value for composed and
// then each iteration of the reduced callback returns. Notice that the callback takes two
// arguments: composed and a function f. Each function is invoked with compose which
// is the result of the previous functions output. Eventually, the last function will be
// invoked and the last result returned.
const compose = (...fns) =>
    (arguments) =>
        fns.reduce((compose, f) => f(compose),
            arguments
        );

const both = compose(
    civilianHours,
    appendAMPM
);

both(new Date());


const civilianHours = () => {
  // convert to civilian hours
};

const appendAMPM = () => {
  // append AM, PM
};