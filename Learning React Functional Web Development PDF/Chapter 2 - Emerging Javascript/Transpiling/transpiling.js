const add = (x = 5, y = 10) => console.log(x + y);

// ========================================================================

"use strict";
var add = function add() {
    var x = arguments.length <= 0 || arguments[0] === undefined ?
        5 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ?
        10 : arguments[1];
    return console.log(x + y);
};