let student={                //-----> is for "For_in". But not  "For_of"
    name: "Imdadul Haque",
    uni_name: "Daffodil International University",
    dept: "Bsc in CSE",
    email: "imdadul15-1440@diu.edu.bd",
    age: 24,
}

//--------> For_in works for object
for(var i in student){
    console.log(`Property: ${i}
     Value: ${student[i]}`);
}

//--------> For_of doesn't work for object
// for(var j of student){
//     console.log(j);
// }