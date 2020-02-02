const invokeIf = (condition, fnTrue, fnFalse) =>
    (condition) ? fnTrue() : fnFalse();

const showWelcome = () =>
    console.log("Welcome!!!");

const showUnauthorized = () =>
    console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized); // "Welcome"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized"

// invokeIf expects two functions: one for true, and one for false. This is demonstrated
// by sending both showWelcome and showUnauthorized to invokeIf. When the condition
// is true, showWelcome is invoked. When it is false, showUnauthorized is invoked.