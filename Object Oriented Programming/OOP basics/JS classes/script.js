//-------> Class (ES6)
//------> Class is a template for creating objects

class Person{
    constructor(fname,lname,birthday,fashion){
        this.f_name = fname;
        this.l_name = lname;
        this.dob= birthday;
        this.f= fashion;
    }
    calculateAge(){
        let birthday=new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullname(){
        console.log(this.f_name, this.l_name);
    }
}

let student = new Person("Imdadul","Haque","10-12-1997","Student");
let employee = new Person("Imdadul","Haque","10-12-1997","Not Employee");
// console.log(student);
// console.log(employee);

console.log(`Student: ${student.calculateAge()}`);
console.log(`Employee: ${employee.calculateAge()}`);

console.log(`Student fullname: ${student.fullname()}`);
console.log(`Employee fullname: ${employee.fullname()}`);
