// --------------------->Variable VS constant
// value may be changed for Variable || Constant never changed it is unchanged

//------>Variable
var s_name = prompt("Enter the student name:");
var s_id = prompt("Enter student ID");

console.log(s_name);
console.log(s_id);
document.write(s_id);
document.write(s_name);

//------>Constant
const id= 1440;
//id=151440        //It's not possible
//id= id+15             //It's also not possible
document.write(id)
console.log(id)

// const n;
// n=1440;          //It's also not possible
// document.write(n)
// console.log(n)
