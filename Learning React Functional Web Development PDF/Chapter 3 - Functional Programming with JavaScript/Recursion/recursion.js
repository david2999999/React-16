// countdown expects a number and a function as arguments. In this example, it is
// invoked with a value of 10 and a callback function. When countdown is invoked, the
// callback is invoked, which logs the current value. Next, countdown checks the value to
// see if it is greater than 0. If it is, countdown recalls itself with a decremented value.
// Eventually, the value will be 0 and countdown will return that value all the way back
// up the call stack
const countDown = (value, fn) => {
    fn(value);
    return (value > 0) ? countDown(value - 1, fn) : value;
};

countDown(10, value => console.log(value));

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0