// Template strings provide us with an alternative to string concatenation. They also
// allow us to insert variables into a string

let lastName = 'Louis', firstName = 'Dav', middleName = 'L';

// Traditional string concatenation uses plus signs or commas to compose a string using
// variable values and strings:
console.log(lastName + ", " + firstName + " " + middleName);

// With a template, we can create one string and insert the variable values by surrounding
// them with ${ }:
console.log(`${lastName}, ${firstName}gt ${middleName}`);