// Since functions are variables, we can add them to objects:
const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
};

obj.log(obj.message);