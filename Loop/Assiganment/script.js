var s=parseInt(prompt("Enter the starting number of Loop: "));
var n=parseInt(prompt("Enter the stop number of the loop: "));
var i, j, sum=0;
var series = "";
for (i=s; i<=n; i++){
    j=i*i;
    //console.log(`${j}`);
    sum+=j;
    series += (j).toString();
    if(i==n){
        continue;
    }
    series +=" + ";

}
console.log(`${series} = ${sum}`);