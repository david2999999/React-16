var name = "Tallac";
var elevation = 9738;

var print = function() {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)
};

var funHike = {name,elevation,print};

funHike.print(); // Mt. Tallac is 9738 feet tall

// Notice we use this to access the object keys.