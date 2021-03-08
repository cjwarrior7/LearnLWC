//array destructuring
let arr =["google","amazon"];
let [comp1,comp2] = arr;
console.log(comp1);
console.log(comp2);
//object destructuring
let obj={
    name:"sfdc",
    age:23,
    tittle:"salesforce"
}

let {name,age,tittle}= obj; //variable name should be same as key 
console.log(name); 
console.log(age);
console.log(tittle);

//String Interpolation
var nam = 'xyz';
var a = 2;
var b =3
console.log(`${nam} is Sum of  ${a} and ${b} is ${a+b} `);


// String methods
//1.include
let str = "SFDC Start test exam"
let check = str.includes("test");
console.log(check);
//2.Index of
let ind =str.indexOf('Start');
console.log(ind);
//3. startWith 
console.log(str.startsWith('SFDC'));
let newstr = str.slice(0,5)
console.log(newstr);
console.log(newstr.toLowerCase());
console.log(str.toUpperCase());

//6.trim method remove whitespaces
var str1 = "         Hello       ";
 var newst = str1.trim();
 console.log(newst);
                                                                                                          
