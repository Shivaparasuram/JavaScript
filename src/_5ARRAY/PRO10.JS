let array =[2,3,4,5,6,7,8]

result =array.filter(n=>n%2===0).map(n=>n*3).reduce((a,b)=>a+b)
console.log("sum of all even and mul 3 :",result)

/*

let array =[2,3,4,5,6,7,8]

result =array.filter(n=>n%2===0)
     .map(n=>n*3)                   //map - mul by 3 the filtered elements
     .reduce((a,b)=>a+b)            //sum all the filtered values
console.log(result)

*/