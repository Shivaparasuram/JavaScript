const array=[1,2,3,4,5,6]
let [a,b ,c,,e , f,g]=array   //,, skip the value in the array
console.log(a,b ,c,e,f,g)
console.log(typeof a)
console.log(array)

//x is value y is rest all value
let [x,...y] = array
console.log(x,y)

//set
const set = new Set([100, 200, 300]);
let [i,j] = set;
console.log(i,j); // 100 200


// Destructuring with Functions
function getCoordinates() {
  return [10, 20, 30];
}
let [k,l,m] = getCoordinates();
console.log("Destructuring with Functions",k,l,m); // 10 20 30