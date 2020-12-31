//-----------> Adding Element to DOM
//-----------> Create Element

//--------------------------->Add / insert Item<-----------------------------
let olItem = document.createElement('li');

//-----> Add ID and CLASS 
olItem.className = "new_class";
olItem.id  = "new_element";

//-------> Add attributes
olItem.setAttribute('title','new_class');
olItem.appendChild(document.createTextNode('PHP'));

document.querySelector('ol').appendChild(olItem);
// console.log(olItem);

//--------------------------->Add / insert Item as link<-----------------------------
let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instragram'));
link.setAttribute('href','https://www.instagram.com');
ulItem.appendChild(link);
document.querySelector('ul').appendChild(ulItem);
console.log(ulItem);