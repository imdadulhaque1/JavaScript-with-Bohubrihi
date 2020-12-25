var s= parseInt(prompt("Please enter the starting number of loop: "));
var l=parseInt(prompt("Please enter the last number of loop: "));
var i,j;
for(i=s; i<=l; i++){
    if (i%2==0){
        console.log(i+" is even number !");
    }
    else {
        console.log(i+" is odd number !");
    }
}


// for(i=l; i>=s; i--){
//     if (i%2==0){
//         console.log(i+" is even number !");
//     }
//     else {
//         console.log(i+" is odd number !");
//     }
// }