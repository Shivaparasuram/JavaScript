let product =[10,12,14,15,17,30]

let max = product[0];
product.forEach(n => {
  if (n > max) max = n;
});
console.log("Most expensive product is ",max);
let result=product.reduce((a,b)=>a+b)
console.log("Sum of all product is ",result)


/*
let max=product.reduce(a,b)=> ? a:b)
*/