let number = 22

let  numberToString = String(number)

console.log(typeof numberToString)
let char = "22"
let charToNumber=Number(char)
console.log(typeof charToNumber)

let x=1
let bool=Boolean(x)
console.log(bool)

let newBool=true
let newStr = String(newBool)
console.log(newStr) //"true"
console.log(typeof newStr)  //String

let falseBool= "false"
let newBoolFalse=Boolean(falseBool)
console.log(typeof newBoolFalse, newBoolFalse) //true

let ronik=null
console.log(typeof null) //Object

console.log(1+"2")//12
console.log("1"+2)//12
console.log(1+2+"3")//33

console.log(+true) //1
console.log(+"") //0