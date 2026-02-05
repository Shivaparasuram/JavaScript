/*
for...in loop
- Iterates over the properties of an object.

*/

let person = {name: "Dude !", age: 22};
for (let key in person) {
  console.log(key, person[key]);
}

/*
 for...of loop
- Iterates over values of iterable objects (arrays, strings).
*/
let arr = ["A", "B", "C"];
for (let value of arr) {
  console.log(value);
}

/*
forEach() method
- Array method for looping through elements.
*/

let nums = [1, 2, 3];
nums.forEach(num => console.log(num));