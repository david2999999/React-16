var topic = "Javascript";

if (topic) {
    let topic = "React";
    console.log('block', topic); // React
}

console.log('global', topic); // Javascript

// The value of topic is not reset outside of the block.

// ========================================================================

var div, container = document.getElementById('container');

for (let i = 0; i < 5; i++) {
    div = document.createElement('div');
    div.onclick = function () {
        alert('This is box #:' + i);
    };
    container.appendChild(div);
}

// Declaring the loop counter i with let instead of var does block off the scope of i.