//-------------> literal Character: Anywhere it will be matched
let re;
let str;

re = /imDaD/i;

str = "Hey, myself Imdadul Haque";  

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