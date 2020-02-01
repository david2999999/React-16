// ES6 introduces class declaration, but JavaScript still works the same way. Functions
// are objects, and inheritance is handled through the prototype, but this syntax makes
// more sense if you come from classical object orientation
class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

const trip = new Vacation("Santiago, Chile", 7);

console.log(trip.print()); // Chile will take 7 days.