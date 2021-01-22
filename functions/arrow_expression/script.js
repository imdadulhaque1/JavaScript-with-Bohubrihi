//----------------------> Normal Function
function student(name,email,uni_name){
    console.log(`Name: ${name}
    Email: ${email}
    Uni_Name: ${uni_name}`);
}

//---------------------->  Function Expression
let student1=function(name,email,uni_name){
    console.log(`Name: ${name}
    Email: ${email}
    Uni_Name: ${uni_name}`);
}

//---------------------->  Arrow Function
let student2= (name,email,uni_name) =>{
    console.log(`Name: ${name}
    Email: ${email}
    Uni_Name: ${uni_name}`);
}

var s_name=prompt("Enter your name: ");
var s_email = prompt("Enter your email id: ");
var s_uni_name = prompt("Enter your university Name: ")
student(s_name,s_email,s_uni_name);
student1(s_name,s_email,s_uni_name);
student2(s_name,s_email,s_uni_name);