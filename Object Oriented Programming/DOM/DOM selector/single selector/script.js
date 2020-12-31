// ---------> document.getElementById()         as single selector
//-------> can called by ID

let val;
//--------------> Getting an Element (first ID will be showed if there is multiple ID)
val = document.getElementById("document-title");
val = document.getElementById("document-title").className;

//-----------> Changing Style
document.getElementById("document-title").style.background="gray";
document.getElementById("document-title").style.color="#fff";
document.getElementById("document-title").style.padding="10px";
//document.getElementById("document-title").style.display="none"; //----> Hide the content

//-------------> Changing the Content
document.getElementById("document-title").textContent = "New Title of content";
document.getElementById("document-title").innerText = "Again Enter a New Title";
document.getElementById("document-title").innerText = "<i>Convert the title into italic format</i>";  //----> HTML tag don't use in "innerText" tag
document.getElementById("document-title").innerHTML = "<i>Convert the title into italic format</i>";



// ---------> document.querySelector()        as single selector
//-------> can called by ID, Class, name(Tag name)
val = document.querySelector('#document-title');   //---------> By ID
val = document.querySelector('.client-title');   //---------> By CLASS
val = document.querySelector('h3');   //---------> By TAG

val = document.querySelector('ol');
val = document.querySelector('ol li');
// val = document.querySelector('ul li');
val.style.background="red";
 val.style.color="white";
 val = document.querySelector('li:last-child');
document.querySelector('li:nth-child(odd)').innerText="Python";  //define the first number item
document.querySelector('li:nth-child(even)').innerText="JavaScript";  //define the second number item
document.querySelector('li:nth-child(3)').innerText="C";  
document.querySelector('li:last-child').innerText="Java";  


console.log(val);