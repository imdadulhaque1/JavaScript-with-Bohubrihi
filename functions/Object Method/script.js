//-----------------> Object Method

let person={
    firstname: "Imdadul",
    lastname: "Haque",
    dob: "10-12-1997",   //------> number, string, date, array, object

    fullname: function(){
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(person.firstname);
console.log(person.fullname());