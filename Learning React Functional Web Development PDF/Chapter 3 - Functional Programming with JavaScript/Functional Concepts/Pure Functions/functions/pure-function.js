const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

const selfEducate = person =>
    ({
        ...person,
        canRead: true,
        canWrite: true
    });

console.log( selfEducate(frederick) );
console.log( frederick );

// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}

// Finally, this version of selfEducate is a pure function. It computes a value based on
// the argument that was sent to it: the person. It returns a new person object without
// mutating the argument sent to it and therefore has no side effects.

// Pure functions are naturally testable. They do not change anything
// about their environment or “world,” and therefore do not require a
// complicated test setup or teardown. Everything a pure function
// needs to operate it accesses via arguments. When testing a pure
// function, you control the arguments, and thus you can estimate the
// outcome