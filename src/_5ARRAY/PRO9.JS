let array =[2,3,4,5,6,7,8]

array.filter(n=>n%2==0)
     .map(n=>n*2)                   //map - mul by 3 the filtered elements
     .forEach(n=>console.log(n))
