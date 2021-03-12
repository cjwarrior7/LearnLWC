//1.Normal export
export var user ='admin';
export function add(a,b){
return a+b;
}
// 2.export together
var users ='admin';
function addi(a,b){
return a+b;
}

export{users,addi}

// 3.export together
function addu(a,b){
    return a+b;
    }
export{users as u,addu}
//4. default 
export default function minus(a,b)
{
    return a-b;
}

export function minusi(a,b)
{
    return a-b;
}



