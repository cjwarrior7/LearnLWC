//*********************var keyword**********************************
//It can be updated and also can be redeclared
//var keyword Two type of Scope global and function
//It is does not support block scope

var course1 ="Zero to hero";
console.log(window.course1);
console.log(course1); 
function abc(){
    var anothercourse3 ="hero in lwc";
    console.log(anothercourse3);
}
abc();
//console.log(anothercourse);

//block scope
if(2===2){
    var anothercourse4 ="heroes in lwc";
    console.log(anothercourse4);
}
console.log(anothercourse4);
console.log('*******************let************************')
 
//**************let****************
//It can be updated but cannot be redeclared
// let keyword support function and block scope;

let course ="Zero to hero";
console.log(course);
console.log(window.course);
function abc(){
    let anothercourse5 ="hero in lwc";
    console.log(anothercourse5);
}
abc();
//console.log(anothercourse5);

//block scope
if(2===2){
    let anothercourse="heroes in lwc";
    console.log(anothercourse);
                                    
    }
    //console.log(anothercourse);
    console.log('*******************const************************')
    //It cannot be redeclared and cannot be updated
    //It support function and block level scope
    const course4 ="Zero to Zero";
    console.log(window.course4);
    console.log(course4); 
    function xyz(){
        const x = 20;
        console.log(x); 
    }
    xyz();
    const x = 30;
    console.log(x); 
    //course4 ="lwc";
    if(2===2){
        let y="hi";
        console.log(y);
                                        
        }
        //console.log(y);    
