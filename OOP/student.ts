import { Person } from "./person.js";

// To inherit the properties of Person in the Student class.
export class Student extends Person { 
    name:string // Declares a property named name

    constructor (){ // Constructor method of the Student class.
        super() // Calls the constructor of the Person class.
        this.name = '' //  initializing the name property to an empty string.
    }

    // Use get accessor to read data from the class
    get Name(){
        return this.name
    }

    // use set accessor to update the value of name.
    set Name(_name){
        this.name = _name
    }
}