var n1,n2;
function sum(n1,n2){
    var key=prompt("Please enter the key: ");
    switch (key){
        case '+':
            console.log(`${n1} + ${n2} =  ${n1+n2}`);
            break;
        case '-':
            console.log(`${n1} - ${n2} = ${n1-n2}`);
            break;
        case '*':
            console.log(`${n1} * ${n2} = ${n1*n2}`);
            break;
        case '/':
            console.log(`${n1} / ${n2} = ${n1/n2}`);
            break;
        default:
            console.log("Input error, please solve it !");
                                
    }
}
var num1=parseFloat(prompt("Enter the first number: "));
var num2=parseFloat(prompt("Enter the last number: "));
sum(num1,num2);