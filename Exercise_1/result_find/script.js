document.getElementsByTagName("input")[0].value="Please enter your marks !";
function getAndSetValue(){
    var in_1=document.getElementById("in_1").value;
    if (in_1 >= 80 && in_1<=100){
        document.getElementById("in_2").value="Your Grade: A+";
    }
    else if (in_1>=70 && in_1<=79){
        document.getElementById("in_2").value="Your Grade: A";
    }
    else if (in_1>=60 && in_1<=69){
        document.getElementById("in_2").value="Your Grade: B";
    }
    else if (in_1>=50 && in_1<=59){
        document.getElementById("in_2").value="Your Grade: C";
    }                                                                                                                                                                                                                                                     
    else if (in_1>=40 && in_1<=49){
        document.getElementById("in_2").value="Your Grade: D";
    }
    else if (in_1>0 && in_1<=39){
        document.getElementById("in_2").value="Your Grade: Failed !";
    }
    else{
        document.getElementById("in_2").value="Your Grade: Invalid Input !";
    }
}