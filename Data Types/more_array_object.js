// More Array
var arr=[10,20,1,3,30,40,6,7,11,14];
console.log(arr);

//Array into array
var arr=[10,20,1,3,30,["Imdadul Haque","Enamul Haque"],40,6,7,11,14];
console.log(arr[5][0]);

//Array inside array into array
var arr=[10,20,1,3,30,["Imdadul Haque",["Shampa","Hena"],"Enamul Haque"],40,6,7,11,14];
console.log(arr[5][1][0]);

//Object inside array
var a=[1,2,["A","B",["E","F","G"],"C","D",{fistName:"Imdadul",lastName:"Haque"}],3,4,5,6,7,8];
console.log(a[2][2][1])
console.log(a[2][5].fistName)
console.log(a[2][5].lastName)
var a=[1,2,["A","B",["E","F","G"],"C","D",{fistName:"Imdadul",lastName:"Haque",university:"{uni_namne:"DIU",subject:"CSE",student_id:"{s1_id:171, s2_id:15, s3_id:1440}""}"}],3,4,5,6,7,8];

