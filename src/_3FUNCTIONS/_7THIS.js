
let Person =
{
Name:"Wmax !x",
Age:"19",
Greet:function()
    {
    console.log("Hello",this.Name)
    }
}
Person.Greet()


//PRINT THE NAME FROM THE ABV PERSON FUNCTION

let Person1 =
{
Name:"Leo !x",
Age:"20",
Onboard:function()
    {
    console.log("Crazyy guy onboard",Person.Name)
    }
}
Person1.Onboard()