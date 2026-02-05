
//CONSTRUCTOR WITH FUNCTION

function Pro(Name,Age)
{
this.Name=Name;
this.Age=Age;
this.Skill=function()
    {
    console.log("This is Function !")
    }

}
let obj=new Pro("Yash !x",22);
let obj1= new Pro("Leo !x",23);
console.log(obj)
console.log(obj1)
obj.Skill()
obj1.Skill()