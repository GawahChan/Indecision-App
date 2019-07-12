//ES6 JavaScript Classes
//Classes are a new way of writing constructor functions!

//Creates a generate construct (generic function essentially)
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major 
    }
    hasMajor() {
        return !!this.major;       //Common way of checking if something is true or false
    }
    //Overwriting getDescription() Method
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
            if(this.hasHomeLocation()) {
                greeting += ` I'm vising from ${this.homeLocation}.`
            }
        return greeting;
    }
}

//Creates instances of the construct, Allows you to reuse them as many times as you want

//experiment by switching new Student with new Person
const me = new Traveler('Gawah Chan', 23, 'London');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());