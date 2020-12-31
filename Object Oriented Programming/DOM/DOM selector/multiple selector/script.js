//---------> Multi-Selector
//--------> document.getElementByClassName()
let list = document.getElementsByClassName('sample-class');

list[0].style.background = "red";
list[0].style.color="white";
list[0].style.padding = "10px";
list[0].textContent="Changed Title showed";
// console.log(list);

//------------> document.getElementsByTagName()
list1 = document.getElementsByTagName('li');
list1 = document.querySelector('ol').getElementsByTagName('li');
let lis = Array.from(list1);
lis.forEach(function(item){
    // console.log(item);
});

// document.querySelectorAll()
// id -> #
// c;lassName = .
// tagName = Nothing, just use tag name

list1 = document.querySelectorAll('.sample-class');
list1 = document.querySelectorAll('ul li');



console.log(list1);