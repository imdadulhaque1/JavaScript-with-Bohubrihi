//-------------> Meta Character
let re;
let str;

re = /^imDaD/i;      //-------->Must start with
re  = /ImDad$/i;       //--------> Must end with
re  = /^ImDad$/i;    //---------> Must start and end with
re  = /^Im.Dad..$/i;    //---------> Matches anyone character against dot
re = /I*m/;                //---------> zero or more times
re = /Doesn'o?t/i;       //---------> Optional
re = /Imdadul Haque\?/;    //-----> escaping


// str = "Imdadul Haque Imdad";  
// str = "Im dadul";     //--------> this is for DOT rules
str = "I am a student.";   //----> this is example for *
str = "He doesnot want to stay with you !";    //----> this is example for ?
str = "Do you know Imdadul Haque?";       //------> escaping examples 

//-------------> Meta Character
console.log(re.exec(str));
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else{
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}
reTest(re, str);