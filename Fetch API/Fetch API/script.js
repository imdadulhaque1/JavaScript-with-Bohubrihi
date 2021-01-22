// Fetch API
// Fetch API uses JAvaScript Promises

document.getElementById('get_data').addEventListener('click',getData);

// xhr.open('GET', 'http://api.icndb.com/jokes/random/',true);

// function getData(){
//     fetch('http://api.icndb.com/jokes/random')
//     .then(function(res){
//         // console.log(res.text);
//         // console.log(res.json());
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }

//-----------------> Using Arrow Function
function getData(){
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => { console.log(data); })
    .catch(err => {console.log(err); })
}