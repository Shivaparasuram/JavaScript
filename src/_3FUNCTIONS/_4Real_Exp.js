//EVEN ODD
let a=(num)=>num%2==0;
let num=10;
console.log(a(num),'\n')

//SQUARE
const square = x => x * x;
console.log("Square of 6:", square(6));

const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());       // Hello, Guest!
console.log(greet("Sam"));  // Hello, Sam!