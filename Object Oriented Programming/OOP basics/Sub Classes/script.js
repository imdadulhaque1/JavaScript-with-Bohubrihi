// Sub Class
// Inheritance

class Person{          //---------> Base Class
    constructor(fname, lname){
        this.f_name = fname;
        this.l_name = lname;
    }

    greeting(){
        return `Hello ${this.f_name} ${this.l_name}`;
    }
}

class Customer extends Person{         //---------> Sub Class
    constructor(fname, lname, phone, memberShip){
        super(fname, lname);   //Link with previous class (Person) Property

        this.c_phone = phone;
        this.c_memberShip = memberShip;
    }
    fullname(){
        console.log(this.f_name, this.l_name);
    }
}
let Name = new Person("Imdadul", "Haque");
console.log(Name);
console.log(Name.greeting());

//----------> Customer
let c = new Customer("Israt Jahan","Maisha","01773964101","1440");
console.log(c);
console.log(c.greeting());
console.log(c.fullname());