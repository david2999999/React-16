import Modash from "../function/Modash";

function assertEqual(description, actual, expected) {
    if (actual === expected) {
        console.log(`[PASS] ${description}`);
    } else {
        console.log(`[FAILED] ${description}`);
        console.log(`\t actual: '${actual}'`);
        console.log(`\t expected: '${expected}'`);
    }
}

let actual;
let expected;
let string;

string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, 19);
expected = 'there was on catch...';

assertEqual(`truncate(): truncates a string`, actual, expected);

actual = Modash.truncate(string, string.length);
expected = string;

assertEqual('`truncate()`: no-ops if <= length', actual, expected);

