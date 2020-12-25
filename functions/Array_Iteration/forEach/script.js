var names=['Imdadul Haque','Enamul Haque','Hena Khatun','Shampa khatun','Israt Jahan Maisha'];
let namePrint = function(item,i,details){
    //-----> 1st Parameter: Item
    //-----> 2nd Parameter: Index
    //-----> 3rd Parameter: Whole Array

    console.log(`Index: ${i} and Item: ${item}`);
    //console.log(`Array: ${details}`);
}
names.forEach(namePrint);