// Classes can also be extended. When a class is extended,
// the subclass inherits the properties and methods of the superclass. These properties
// and methods can be manipulated from here, but as a default, all will be inherited.
class Expedition extends Vacation {

    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const trip = new Expedition("Mt. Whitney", 3,
        ["sunglasses", "prayer flags", "camera"]);
trip.print();
// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera