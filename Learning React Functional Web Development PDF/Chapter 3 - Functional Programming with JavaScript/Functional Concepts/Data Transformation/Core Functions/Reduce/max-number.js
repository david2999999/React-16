// The reduce and reduceRight functions can be used to transform an array into any
// value, including a number, string, B Boolean, object, or even a function.
// Let’s say we needed to find the maximum number in an array of numbers. We need to
// transform an array into a number; therefore, we can use reduce:
const ages = [21,18,42,40,64,63,34];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    return age > max ? age : max;
}, 0);

console.log('maxAge', maxAge);
// 21 > 0 = true
// 18 > 21 = false
// 42 > 21 = true
// 40 > 42 = false
// 64 > 42 = true
// 63 > 64 = false
// 34 > 64 = false
// maxAge 64