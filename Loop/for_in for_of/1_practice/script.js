//-------> Uses of For_in: String, Array, Object
//-------> Uses of For_of: String, Array

let s="I am learning JavaScript !";              //-----> is for "For_in" & "For_of"
let names = ['Imdadul','Shamima','Rakibul','Fakhrul'];       //-----> is for "For_in" & "For_of"

let student={                //-----> is for "For_in". But not  "For_of"
    name: "Imdadul Haque",
    uni_name: "Daffodil International University",
    dept: "Bsc in CSE",
    email: "imdadul15-1440@diu.edu.bd",
    age: 24,
}
//---------------------> For string
//--------> we will get index for using "For_in"
// for( var i in s){
//     console.log(`Index ${i} and item ${s[i]}`);
// }

//--------> we will get item for using "For_of"
// for( var j of s){
//     console.log(`Item ${j}`);
// }


//---------------------> For Array
//-------> We will get the indexes using  "For_in"
for(var k in names){
    console.log(`Index: ${k} and item: ${names[k]}`);
}

//-------> We will get the indexes using  "For_of"
for(var l of names){
    console.log(`Index: ${l}`);
}