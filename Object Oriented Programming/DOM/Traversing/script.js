//-----------> Traversing the DOM
let val;
let list = document.querySelector('ul');
// let listItem = document.querySelector('ul li:last-child');
val = list;


//-----------> Get Child Node

val = list;
// val  = list.childNodes;
// val  = list.childNodes[0];
// val  = list.childNodes[1];
// // val  = list.childNodes[2];
 val  = list.childNodes[4];

 val  = list.childNodes[1].nodeName;
 val  = list.childNodes[1].nodeType;

// 1 ----> Element
// 2 ----> Attributes
// 3 ----> Text Node
// 8 ----> Comment
// 9 ----> Document Itself
// 10 ----> DocType

val = list.childNodes;
val =  list.children[0].textContent="Hello";
val =  list.children[1].childNodes[0];
val =  list.children[1].childNodes[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

let listItem = document.querySelector('ul li:first-child');
val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement;

val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;


listItem = document.querySelector('ul li:last-child');
val = listItem.previousSibling;
val = listItem.previousSibling.previousSibling;
// console.log(listItem);
// console.log(list);
console.log(val);