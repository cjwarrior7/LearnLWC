const timerid1 = setTimeout(function(){
    console.log('set Timeout') ;
},5000)
clearInterval(timerid1 );
const timerid = setInterval(function() {
    console.log('set Interval');
},1000)
clearInterval(timerid);