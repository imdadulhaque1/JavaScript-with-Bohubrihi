var s=document.getElementById("starting").value;
var e=document.getElementById("ending").value;
var sum=0;

while(s <= e){
    sum=sum+s; 
    s++;
}

document.getElementById("result").value=sum;