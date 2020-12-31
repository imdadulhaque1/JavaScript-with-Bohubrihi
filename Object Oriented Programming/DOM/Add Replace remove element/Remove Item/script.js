//------------> Remove Elements

//----------> Remove Element
let listItems = document.querySelectorAll('li');
let list = document.querySelector('ul');

// listItems[0].remove();   //----> way to remove li item in DOM
// listItems[5].remove();
//list.removeChild(listItems[5]);   //-----> Another way to remove the item

//-----------------> Another perfect way to remove item from DOM<------------------
list.classList.add("test");
list.classList.add("test-new");

list.classList.remove("sample-class");

let val = list.hasAttribute('title');
list.setAttribute('title', 'New Title');
list.removeAttribute('title');  //-------> Remove the Title
console.log(val);
console.log(listItems);
console.log(list);
