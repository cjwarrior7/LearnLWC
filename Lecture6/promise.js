function checkIsSuccess(data){
    return new Promise(function(resolve,reject){
     if(data === "Success"){
       return resolve("executed successfully");
     }
     else{
        return reject("executed unsuccessfully");
     }
    });

}
checkIsSuccess('').then(function(result){
console.log(result);
}).catch(function(error){
console.log(error);
})

fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(result){
    return result.json()
}).then(function(response){
    console.log(response);

})