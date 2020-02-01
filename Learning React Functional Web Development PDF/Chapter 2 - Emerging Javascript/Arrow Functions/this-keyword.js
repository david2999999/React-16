var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: function (delay=1000) {
        setTimeout(function () {
            console.log(this.resorts.join(","));
        }, delay);
    }
};

tahoe.print(); // Cannot read property 'join' of undefined

// ========================================================================

// we can use the arrow function syntax to protect the scope of this:
var tahoeWithArrow = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: function (delay=1000) {
        setTimeout(() => {
            console.log(this.resorts.join(","));
        }, delay)
    }
};

tahoeWithArrow.print(); // Kirkwood, Squaw, Alpine, Heavenly, Northstar