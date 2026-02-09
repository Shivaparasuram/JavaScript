//let a= "AMBIKA DON !".split('');
//console.log(a);
//console.log(a.splice(0,3,0));
//console.log(a);
//
//let b="SANDEEP".split('')
//b.splice(4,4,4)
//console.log(b);

let array =[12,3,45,678,90]
let r1=array.filter((n)=> n%2==0).map(n=>n*2).reduce((a,b)=>(a+b))
console.log(r1)