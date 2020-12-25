//There are differents type of data type in JavaScript
// 1. Numbers
// 2. Strings
// 3. Booleans
// 4. Arrays 
// 5. Objects 

//More data types in JavaScript
// 6. Undefined
// 7. Empty values
// 8. Null
// 9. NaN

//================> Numbers
// Here,
//             1e1 == 10**1
// var x=10**5;
// console.log(x);
// var com = 1e1 == 10**1;
// console.log(com);
// com = (1e5 === 10**5);
// console.log(com);
// com = (10e5 == 10**5);
// console.log(com);

// var a=10e-5;
// console.log(a);

// var b=Infinity;
// console.log(b);

// var c=1440;
// var d=c.toString();     //Integer convert into String
// console.log(d);
// d=d+111;         //Concatenation between d as string and 111 which as integer
// console.log(d);

// e=parseInt(d);   //String convert into Integer
// console.log(e/2);

// var h=1440;
// h=h.toString(2);   //Convert into Binary
// console.log(h);

// var f=1440;
// f=f.toString(8) ;   //Convert into Octal
// console.log(f);

// var g=1440;
// g=g.toString(16);    //Convert into Hexa-decimal
// console.log(g);

// var i =1440.111111111;
// //i=parseInt(i);      //Convert integer from float number
// console.log(i);
// console.log(i.toPrecision(7));
// console.log(i.toPrecision(9));
// console.log(i.toPrecision(11));


//================> Strings



//================> Array
var countries=["Bangladesh","Pakhisthan","Arob-Amerat","Turusko","Irak","Canada"];
console.log(countries[4]);

countries.push("Japan");    //Push th item end of the list
console.log("Japan push: "+countries);

countries.pop();         //Pop the item end of the list
console.log("Japan pop: "+countries);

countries.shift();       //shift the item at the first of the list
console.log("Bangladesh shift: "+countries);

countries.unshift("Bangladesh");        //unshift the item at the first of the list
console.log("Bangladesh unshift: "+countries);

var name="Imdadul Hauqe";
nam=name.split("");
console.log(nam);

var bio="I love to spend time with programming !";
var x=bio.split("");
console.log(x);

var bio="I love to coding with python !";
var x=bio.split("o");
console.log(x);

var name=["Imdadul Haue", "Tufayel", "Sobuz", "Sohel", "Mehedi"];
console.log(name);

var n=[27,3,4,1,44,88,65,343,555]
var s=n.sort();
console.log(s);

var r=s.reverse();
console.log(r);
//=====> String sorting makes a problem [Question in forum]
var fruits=["Mango","Aple","Orange","Banana"]
fruits.sort();
console.log(fruits)

var r=fruits.reverse();
console.log(fruits);

var n=[27,3,4,1,44,88,65,343,555]
n.sort();         //it is not perfectly works why question in forum?
console.log(n)

//--------> Use of join(): 
// We can use any sign what is not posible for split()
var st=["Love","is","for","learning","JS"];
var stt=st.join(" ");
console.log(stt);
var sttt=st.join(" // ");
console.log(sttt);
//;