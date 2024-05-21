const str= new String("Hello world")


console.log(str[4]); 
console.log(str.__proto__); 

console.log(str.toUpperCase()); 
console.log(str.split(" ",1))
console.log(str.split(" "))
const newStr="   Trim Space    "
console.log(newStr.trim())

const url="https://this-is-a-wesite?%20wesite.com"
console.log(url.replace("20","-"))
console.log(url.includes("this"))
