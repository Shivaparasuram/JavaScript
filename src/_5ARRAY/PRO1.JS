let  array =[1,2,4,6,8]
console.log(array)
array.push(10,22,34,56,223)
console.log(array)
array.pop()
console.log(array)

//Delete element from Front
array.shift(10)
console.log("Delete from front",array)

//Insert element from Front
array.unshift(20)
console.log("Insert from front",array)

//Slice
array.splice(2,2)
console.log(array)

array.splice(2,1,10,100,1000)
console.log(array)
