var lordify = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`);
};

var regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};

lordify(regularPerson); // Bill of Canterbury


// Instead of using dot notation syntax to dig into objects, we can destructure the values
// that we need out of regularPerson
var lordify2 = ({firstname}) => {
    console.log(`${firstname} of Canterbury`);
};

lordify2(regularPerson); // Bill of Canterbury

// Destructuring is also more declarative, meaning that our code is more descriptive
// about what we are trying to accomplish. By destructuring firstname, we declare that
// we will only use the firstname variable.