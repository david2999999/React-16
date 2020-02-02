var string = "This is the midday show with Cheryl Waters";
var urlFriendly = "";

for (var i = 0;  i < string.length; i++) {
    if (string[i] === "") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}

// In this example, we loop through every character in the string, replacing spaces as
// they occur. The structure of this program is only concerned with how such a task can
// be achieved. We use a for loop and an if statement, and set values with an equality
// operator. Just looking at the code alone does not tell us much. Imperative programs
// require lots of comments in order to understand what is going on.