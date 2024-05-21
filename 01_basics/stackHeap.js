// Primitive (Stack) Copy of data type is used

let Name1= "Usman"
let Name2=Name1
Name2 = "Aashish"

console.log(Name1);
console.log(Name2);

// Non Primitive (Heap) refrence of data type is used

let obj = {
    Name:"Usman",
    Email:"usmankathat2002@gmail.com"
}

let newObj=obj
newObj.Email = "NewUsmankathat@gmail.com"

console.log(obj.Email);
console.log(newObj.Email);
