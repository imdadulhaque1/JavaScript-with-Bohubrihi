var s= parseInt(prompt("Please the starting number: "));
var l=parseInt(prompt("Please enter the stop number: "));
var i,j;
console.log("<--------Break statement starting------->");
for(i=s; i<=l; i++){
    if (i%2==0){
        break;
    }
    console.log(i+" is odd number !");
}

console.log("<--------Continue statement starting------->");
for(i=s; i<=l; i++){
    if (i%2==0){
        continue;
    }
    console.log(i+" is odd number !");
}