//-----> Static Function: Static function can not call from object but call from class

class Person{
    constructor(fname, lname){
        this.f_name = fname;
        this.l_name = lname;
    }
    greeting(){
        console.log(`Hello ${this.f_name} ${this.l_name}`);
    }

    static test(){
        console.log(`I am from Static`);
    }
}

let person1 = new Person("Imdadul","Haque");

console.log(person1.greeting());   //----> normal function will be called from obejct
//console.log(person1.test());   //-----> It doesn't works because it called from object
console.log(Person.test());    //-----> It works because it called from class