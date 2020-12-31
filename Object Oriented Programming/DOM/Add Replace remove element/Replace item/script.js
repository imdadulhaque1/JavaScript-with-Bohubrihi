//------> Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode(' Replacing by New Heading'));

newHeading.className = document.querySelector('h3');

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);