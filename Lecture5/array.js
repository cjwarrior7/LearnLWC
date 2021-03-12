let arr =[2,5,10,15];
let newarray =arr.map(function(currentItem,index,array){
    console.log(`current item is ${currentItem} and index is ${index} and arr is ${arr}`);
    return currentItem*2;

})
console.log(newarray);
console.log(arr);

let filteredarray =arr.filter(function(currentItem,index,array){
    //console.log(`current item is ${currentItem} and index is ${index} and arr is ${arr}`);
    return currentItem > 5;

})
console.log(filteredarray);
let age =[10,30,40,50];
let isAllAdult = age.every(function(currentItem){
    //console.log(`current item is ${currentItem} and index is ${index} and arr is ${arr}`);
    return currentItem > 18;

})

console.log(isAllAdult);

let ageList =[20,30,40,50];
let isAll = ageList.some(function(currentItem){
    //console.log(`current item is ${currentItem} and index is ${index} and arr is ${arr}`);
    return currentItem > 20;

})
console.log(isAll);

var name = ["cj","hj","showan","triya","aman"];
//name.sort();
//console.log(name.sort());
var points = [10,39,12,69,48];
var sortedpoints = points.sort(function(a,b){
    return b-a ; //a-b (ascending)
    //b-a (desending)
    //
})

console.log(sortedpoints);

let num =[12,36,52];
// let res = num.reduce(function(total,currentItem,index,array){
 
// });

let res = num.reduce(function(total,currentItem,index,array){
    return total + currentItem;
},0);

console.log(res);
num.forEach(function(currentItem){
    console.log('CI '+currentItem);
    
})



