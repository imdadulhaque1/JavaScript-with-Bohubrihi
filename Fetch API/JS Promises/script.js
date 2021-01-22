// -----------> Promises Function
// .then

let persons=[
    {firstName: "Imdadul", lastName:"Haque"},
    {firstName: "Israt Jahan", lastName:"Maisha"}
]
function createPerson(person){
    let prom = new Promise(function(resolve, reject){
        persons.push(person);
        let error=false;
        if (!error){
            resolve();
        }
        else{
            reject("Error! : Something Wrong !");
        }
    }); 
    return prom;
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
createPerson({firstName:"Enamul", lastName:"Haque"})
.then(getPerson)
.catch(function(err){
    console.log(err);
});
