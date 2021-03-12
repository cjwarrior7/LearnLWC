var ele = document.querySelector('div');
console.log('ele --'+ele.innerText);

var eles = document.querySelectorAll('div');
console.log('eles --'+eles);

Array.from(eles).map(function(item){
 return item.style.color = 'green'
})


console.log("****************event*******************")
document.addEventListener('mousemove',handler);

function handler(){
    document.querySelector('.demo').innerHTML = Math.random();
}
//document.getElementById("myDIV").removeEventListener("mousemove", );



