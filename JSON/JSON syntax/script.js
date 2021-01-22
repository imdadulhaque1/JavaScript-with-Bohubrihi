//-------> Object Syntax in JavaScript
var student={
    name: "Imdadul; Haque",
    age: 24,
    hometown: "Sirajganj"
}

//-------> JSON Syntax in JavaScript
// var student_1={                  //Normally, JSON type is not supported. That's means normally it will be as JS object 
//     "name": "Imdadul; Haque",
//     "age": 24,
//     "hometown": "Sirajganj"
// };

// Object convert into JSON using "stringify()" method in JavaScript
var student_json = JSON.stringify(student);
console.log(student_json);
// console.log(student_1);

// JSON convert into Object using "parse()" method in JavaScript
// var student_1_new = JSON.parse(student_1);   //It don't converted into JS Object. Because, Normally it will be as JS object.
                                                                        //It's solution is in "Warnings" folder.
var student_new = JSON.parse(student_json);
console.log(student_new);

