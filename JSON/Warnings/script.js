//JSON.stringify()----> JS Object to JSON string converted
//JSON.parse()----> JSON string to JS Object converted

var person_1={         //-------> This is JSON in JS
    "name": "Imdadul Haque",
    "age": 24,
    "hometown": "Sirajganj",
    "married":false
};
//-------------> Important Notes
// When JSON code is written in the JS code then it never support as JSON.
// It Will be like as JS Object. 
//var person_1_json = JSON.parse(Person_1);  // it will ne ver support because this JSON behves as JS Object

var person1_json = JSON.stringify(person_1);  // first os all i converted into JSON using stringify()
// console.log(person1_json);
var person_obj = JSON.parse(person1_json); // JSON to JS object convert
console.log(person_obj);

var person_json = JSON.stringify(person_obj);
console.log(person_json);




// var person_2={
//     name: "Israt Jahan Maisha",
//     age:2,
//     hometown:" SIrajganj",
//     married:false
// };

// console.log(person_2);
// console.log(person_1);