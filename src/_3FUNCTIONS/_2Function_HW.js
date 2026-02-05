const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    a = Number(a);
    b = Number(b);

    console.log("Addition:", add(a, b));
    console.log("Subtraction:", sub(a, b));
    console.log("Multiplication:", mul(a, b));
    console.log("Division:", div(a, b));
    console.log("Modulus:", mod(a, b));

    rl.close();
  });
});

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }
function mod(a, b) { return a % b; }