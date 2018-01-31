// Setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi. I am ${this.name}!`;
  }

  getDescription(){
    return `Andrew Mead is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super (name, age);
    // super refers to the parent class, allows us to call Person and gather that data
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
    // '' returns a falsey value. if '' is passed in, take the opposite (true), and get the opposite of that --> returns false

  }
  getDescription(){
    let description = super.getDescription();
    if (this.hasMajor()){
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
  // you can OVERWRITE the parent function, getDescription
  // you can also access parent function, by using super.getDesscription
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super (name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    if (this.homeLocation){
      return greeting += ` I'm visiting from ${this.homeLocation}.`
    } else {
      return `Hi. I am ${this.name}.`
    }
  }
}

// ANDREWS Challenge
//  Traveler --> Person
// Add support for homeLocation
// Override getGreeting
// 1. if there is a home location --> Hi. I am Andrew Mead. I'm visitng from Philadelphia.
// 2. Else --> Hi. I am Andrew Mead.


const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
