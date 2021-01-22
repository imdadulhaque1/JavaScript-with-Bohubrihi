function sum(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=parseFloat(num1) + parseFloat(num2);
    if(!isNaN(result)){
        document.getElementById('ans').innerHTML = "result: "+result;
    }
}

function sub(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=parseFloat(num1) - parseFloat(num2);
    if(!isNaN(result)){
        document.getElementById('ans').innerHTML = "result: "+result;
    }
}

function mul(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=parseFloat(num1) * parseFloat(num2);
    if(!isNaN(result)){
        document.getElementById('ans').innerHTML = "result: "+result;
    }
}

function div(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=parseFloat(num1) / parseFloat(num2);
    if(!isNaN(result)){
        document.getElementById('ans').innerHTML = "result: "+result;
    }
}