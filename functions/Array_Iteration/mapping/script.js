//---------> Array iteration using Mapping
var names=['Imdadul Haque','Enamul Haque','Hena Khatun','Shampa khatun','Israt Jahan Maisha'];
let namePrint = function(item){
    return `${item} is a name.`;
}
let arr_res = names.map(namePrint);
console.log(arr_res);