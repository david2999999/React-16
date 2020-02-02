var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick;
}

selfEducate();
console.log( frederick );
// {name: "Frederick Douglass", canRead: true, canWrite: true}

// The selfEducate function is not a pure function. It does not take any arguments, and
// it does not return a value or a function. It also changes a variable outside of its scope:
// Frederick. Once the selfEducate function is invoked, something about the “world”
// has changed