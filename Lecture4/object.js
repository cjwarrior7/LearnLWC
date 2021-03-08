let obj={
    name:"salesforce",
    age:23,
    dob:'23/02/1996',
    nickname:"sfdc"
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
let str = JSON.stringify(obj);
console.log(str);
console.log(JSON.stringify(obj)) // Converts the object into the string

console.log(JSON.parse(str)) // Converts the string into the object
