// array

var arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//objects
var obje = {
    "name" : "cj",
    "full name" :"cj warrior",
    "age" : 23
}
console.log(obje.name);
console.log(obje.age);
console.log(obje["full name"]); // this is use case when we have space in key we access it like array
obje.hobbies = "reading"
console.log(obje)

//Spread operator
//1.Expanding the operator
let greeting = "Hicjwarrior7";
let charlist = [...greeting];
console.log(charlist);

//2.Combining  Array
let var89 = ["amazon","flipkart"];
let var87 = ["facebook","Instagram"];
let var67 = [...var89 ,...var87];
console.log(var67);

//3.Adding values to an array
let var90 = ["amazon","flipkart","facebook"];
let var88 = [...var90,"Walmart"];
console.log(var88);
 var88 = ["Paytm",...var90];
console.log(var88);

//4.Combining Objects
let obj1={name:"salesforce",age:23,date:"23/02/2021"};
let obj2={name:"copado",age:25,data:"test"};
let obj3={...obj1,...obj2};
console.log(obj3);

//5.Shallow copy
var arr10 =['x','y','z','m'];
var arr11 = [...arr10];
arr11.push('cj');
console.log(arr10);
console.log(arr11);

//6.Nested Copy
//****************Problem with Spread operator
var hi =[
    {name:"sfdc",
age:5} ,
    {name:"sfmc",
age:6
    }
];
var hi1 = [...hi];
hi1[0].name ="sf";
console.log(...hi1);
console.log(...hi);
//************solution or quick hack******************
var hi2 = JSON.parse(JSON.stringify(hi)) ;
//var hi2 = [...hi];
hi2[0].name ="sfhc";
console.log(...hi2);
console.log(...hi);







