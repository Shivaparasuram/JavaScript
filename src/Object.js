console.log("\n")

let Gamer={
Name:"Janny !",
age:24,
Skill:"Shot Gun !"
}

 console.log(Gamer)
 console.log(Gamer.Name)
 console.log(Gamer.Skill)
 console.log(Gamer.Skill.length)

console.log("\n")


//Complex OBJ -- obj inside an obj

let GodLike={
Name:"Janny !",
age:24,
Skill:"Shot Gun !",
Team:{
Name:"Smr",
age:24,
Skill:"Bot !"
}
}

console.log(GodLike.Team)

console.log("\n")

let Detail={
Specialization:"a",
age:23,
Name:{
FirstName:"Shiva !",
LastName:"xDude !"
}
}

console.log(Detail.Name.FirstName,"",Detail.Name.LastName)

console.log("\n")

console.log(Detail);
delete Detail.age;
console.log(Detail);


