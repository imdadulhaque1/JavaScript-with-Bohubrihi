//-----------> https://jsonlint.com   (This is for checking JSON from the website link)
//-------> Which type of data are supported by JSON
// String
// Number
// Object (JSON Object)
// Array
// Boolean
// NULL

//-------> Doesn't supported by JSON
// Undefined
// Function
// Date

var person={
    name: 'Imdadul Haque',      //String----->JSON allow
    age: 24,      //Number----->JSON allow
    hometown: "Sirajganj",      //String----->JSON allow
    married: false,      //Boolean----->JSON allow
    dob: 10-112-1997,       //Date----->JSON NOT allow
    test_null: null,      //NULL----->JSON allow
    test_undefined: undefined,      //Undefined----->JSON NOT allow
    greet: function(){      //Function----->JSON NOT allow
        console.log(`Hello ${this.name}`);
    }
}

// person.greet();
var person_json = JSON.stringify(person);
console.log(person_json);

