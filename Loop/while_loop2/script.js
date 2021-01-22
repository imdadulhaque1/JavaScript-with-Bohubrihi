
var s=parseInt(prompt("Enter the starting number: "));
var e=parseInt(prompt("Enter the ending number: "));
var sum=0;
var multi=1;

//Summation of numbers using while loop
while(s <= e){
    sum=sum+s; 
    multi=multi*s; 
    s++;
}
console.log("Summation: "+sum)
console.log("Multiplication: "+multi);

//Multiplication of numbers using while loop
// while(s <= e){
//     multi=multi*s; 
//     s++;
// }
// console.log("Multiplication: "+multi);