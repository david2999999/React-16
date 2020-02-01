// CommonJS is the module pattern that is supported by all versions of Node.js.5 You
// can still use these modules with Babel and webpack. With CommonJS, JavaScript
// objects are exported using module.exports

// const print(message) => log(message, new Date())
// const log(message, timestamp) =>
//     console.log(`${timestamp.toString()}: ${message}`}
// module.exports = {print, log}


// CommonJS does not support an import statement. Instead, modules are imported
// with the require function:

// const { log, print } = require('./txt-helpers');