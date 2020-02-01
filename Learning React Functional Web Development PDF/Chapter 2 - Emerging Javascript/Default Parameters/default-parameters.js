// If no arguments are provided to the logActivity function, it will run correctly
// using the default values
function logActivity(name="Shane McConkey", activity="skiiing") {
    console.log(`${name} loves ${activity}`);
}

// ========================================================================

// Default arguments can be any type, not just strings:
var defaultPerson = {
    name: {
        first: "Shane",
        last: "McConkey"
    },
    favActivity: "Skiing"
};

function logActivity2(p = defaultPerson) {
    console.log(`${p.name.first} loves $${p.favActivity}`);
}