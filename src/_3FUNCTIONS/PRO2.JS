function sum(x,y)
    {
     console.log("Before return")
     return(x+y)
     console.log("After return")
    }
let res=sum(5,3)
console.log("Sum",res)


    //ARROW
const arrowsum =(a,b)=>console.log("Arrowsum",a+b)
arrowsum(6,9)