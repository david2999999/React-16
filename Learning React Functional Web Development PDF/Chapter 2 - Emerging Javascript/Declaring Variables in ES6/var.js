var topic = "Javascript";

// If a variable is created inside of an if/else block, that variable is not scoped to the
// block:
if (topic) {
    var topic = "react";
    console.log('block', topic); // block React
}

console.log('global', topic); // global React

// The topic variable inside the if block resets the value of topic.

// ========================================================================

var div, container = document.getElementById('container');

for (var i = 0; i < 5; i++) {
    div = document.createElement('div');
    div.onclick = function () {
        alert('This is box #' + i);
    };

    container.appendChild(div);
}

// In this loop, we create five divs to appear within a container. Each div is assigned an
// onclick handler that creates an alert box to display the index. Declaring i in the for
// loop creates a global variable named i, and then iterates it until its value reaches 5.
// When you click on any of these boxes, the alert says that i is equal to 5 for all divs,
// because the current value for the global i is 5