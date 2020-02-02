var target = document.getElementById('target');
var wrapper = document.createElement('div');
var headline = document.createElement('h1');

wrapper.id = "welcome";
headline.innerText = "Hello World";

wrapper.appendChild(headline);
target.appendChild(wrapper);

// This code is concerned with creating elements, setting elements, and adding them to
// the document. It would be very hard to make changes, add features, or scale 10,000
// lines of code where the DOM is constructed imperatively