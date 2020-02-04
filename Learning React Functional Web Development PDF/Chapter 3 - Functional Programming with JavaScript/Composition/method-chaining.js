const template = "hh:mm:ss tt";

const clockTime = template.replace("hh", "03")
    .replace("mm", "33")
    .replace("ss", "33")
    .replace("tt", "PM");

console.log(clockTime);
// "03:33:33 PM"

// In this example, the template is a string. By chaining replace methods to the end of
// the template string, we can replace hours, minutes, seconds, and time of day in the
// string with new values. The template itself remain intact and can be reused to create
// more clock time displays.