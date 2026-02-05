function checkNumber(num) {
  if (num === 0) {
    console.log("Zero is neither odd nor even");
  } else if (num % 2 === 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

checkNumber(0);   // Output: Zero is neither odd nor even
checkNumber(5);   // Output: 5 is odd
checkNumber(12);  // Output: 12 is even
