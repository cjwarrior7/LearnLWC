console.log("****************event*******************")
document.addEventListener('mousemove',handler);

function handler(){
    document.querySelector('.demo').innerHTML = Math.random();
}
//document.getElementById("myDIV").removeEventListener("mousemove", );
function removeHandler(){
    console.log("Hi Test");
document.removeEventListener('mousemove',handler);
}
console.log('*********custom event***********');

document.addEventListener("hello",function(data){
    console.log("hello has called and send", data.detail)
})
function callCustomMethod(){
    let event =new CustomEvent("hello", //hello is event name
    {
        detail:{name:"cjwarrior7"}// detail property used to pass data
    })
    document.dispatchEvent(event); // dispatch event use to trigger the event
}
