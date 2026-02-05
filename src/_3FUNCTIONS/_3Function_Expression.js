//      FUNCTION INSIDE VARIABLE
let b=function A(x,y){
console.log("FUNCTION INSIDE VARIABLE",x*y)
}
b(2,3)


//      ANONYMOUS FUNCTION - NO NAME
let a =function (a,b){
console.log("ANONYMOUS FUNCTION - NO NAME ",a+b);
}
a(3,1)

//ARROW FUNCTION
let z= (t,p)=>console.log("ARROW FUNCTION ",t/p);
z(4,2)

//  ARROW WITH RETURN
let c=(e,f)=> e+f;
console.log("ARROW WITH RETURN ",c(2,2))


