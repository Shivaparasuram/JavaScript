//OBJ

let A=
{
Name:"Dude !",
Score:99,
Trail:function()
    {
    return this.Name;
    }
}
console.log(A.Name);
console.log(A.Trail())

//OBJ

let B=
{
Name:"Shivzx !",
Score:88,
Trail:function()
    {
    return this.Name;
    }
}
console.log(B.Name);


//FUNCTIONS

function C(A,B)
{
if(A.Score>B.Score)
    {
    console.log("Great A Obj !",A);
    }
else
    {
    console.log("Win !",B);
    }
}
C(A,B)