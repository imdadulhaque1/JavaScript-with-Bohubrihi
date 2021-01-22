//  ------> Regular Expression
// ------> Pattern Matching Techniques

let re;
let str;

re=/hello/;
// console.log(re);
// console.log(re.source);

re = /hello/i;    //-----> i=case insensitive
str = "Hello, myself Imdadul Haque !";
str = "You should say Hello, then introduce yourself !";

//-----> exec() : Return result in an array or NULL
let result = re.exec(str);

//-----> test() : true / false
result = re.test(str);

//-----> match() : Return array or NULL
result = str.match(re);

//-----> search() : Return index of the first match or -1
result = str.search(re);

//-----> replace() : Return new String
let newStr = str.replace(re, "name");
console.log(`Original String: ${str}`);
console.log(`New String: ${newStr}`);


// console.log(result);

