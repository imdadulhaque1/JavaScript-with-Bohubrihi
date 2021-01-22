//-----------> Callback Function
// setTimeout(function(){
//     console.log("Hey, myself Imdadul Haque !");
// },2000);

// let persons=[
//     {firstName: "Imdadul", lastName:"Haque"},
//     {firstName: "Israt Jahan", lastName:"Maisha"}
// ]
// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);
//     },4000);
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = "";
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         });
//         document.getElementById('output').innerHTML = output;
//     },1000);
// }

let persons=[
    {firstName: "Imdadul", lastName:"Haque"},
    {firstName: "Israt Jahan", lastName:"Maisha"}
]
function createPerson(person, callback){
    setTimeout(function(){
        persons.push(person);
        callback();
    },4000);
}

function getPerson(){
    setTimeout(function(){
        let output = "";
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    },1000);
}
createPerson({firstName:"Enamul", lastName:"Haque"}, getPerson);
getPerson();
