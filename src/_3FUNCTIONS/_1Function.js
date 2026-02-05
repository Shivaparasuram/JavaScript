// WITHOUT RETURN
function Demo(){
console.log( "WITHOUT RETURN")
}
console.log('\n')


// WITH RETURN

function Demo1(){
return "This is a Function !"
}

console.log("\nWITH RETURN ! ",Demo1())
console.log('\n')

//WITH PARA AND ARGS
function A(a=5){   //a= 5 is parameter
return a+b;
}
b=12
A(b)               //arguments
console.log(A())
console.log('\n')


//Default value
function B(x,y=1)
{
console.log(`x and y value is ${x},${y}`)
}

x=10;
y=3;
B(x,y)
console.log('\n')