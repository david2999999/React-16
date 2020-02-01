var topic = "Javascript";

// If a variable is created inside of an if/else block, that variable is not scoped to the
// block:
if (topic) {
    var topic = "react";
    console.log('block', topic); // block React
}

console.log('global', topic); // global React

// The topic variable inside the if block resets the value of topic.