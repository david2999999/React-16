// OLD
var skier = {
    name: name,
    sound: sound,
    powderYell: function() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed: function(mph) {
        this.speed = mph;
        console.log('speed:', mph);
    }
};

// NEW
const skierNew = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
        this.speed = mph;
        console.log('speed:', mph);
    }
};