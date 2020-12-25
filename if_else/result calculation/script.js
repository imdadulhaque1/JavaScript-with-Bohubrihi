document.getElementsByTagName('input')[0].value="Please enter your marks";

function getAndSetValue(){
    var in_1=document.getElementById('in_1').value;
    if(in_1 >=80 && in_1<=100){
        document.getElementById('in_2').value="A+";
        //document.write("A+");
    }
    else if(in_1 >=70 && in_1<=79){
        //document.write("A");
        document.getElementById('in_2').value="A";
    }
    else if(in_1 >=60 && in_1<=69){
        document.getElementById('in_2').value="B";
        //document.write("B");
    }
    else if(in_1 >=50 && in_1<=59){
        document.getElementById('in_2').value="C";
        //document.write("C");
    }
    else if(in_1 >=40 && in_1<=49){
        document.getElementById('in_2').value="D";
        //document.write("D");
    }
    else if(in_1 >=0 && in_1 <40){
        document.getElementById('in_2').value="FaiL";
        //document.write("Fail.");
    }
    else{
        document.getElementById('in_2').value="You entered a wrong keyword !";
        //document.write("You entered a wrong keyword !");
    }
}