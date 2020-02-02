const highSchools = schools.map(school => `${school} High School`);

console.log(highSchools.join("\n"));
// Yorktown High School
// Washington & Lee High School
// Wakefield High School

console.log(schools.join("\n"));
// Yorktown
// Washington & Lee
// Wakefield

const highSchools2 = schools.map(school => ({ name: school }));

console.log( highSchools2 );
// [
    // { name: "Yorktown" },
    // { name: "Washington & Lee" },
    // { name: "Wakefield" }
// ]