// We can also add functions to arrays in JavaScript:
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables