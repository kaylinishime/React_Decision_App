// arugments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55,1));


// this keyword - no longer bound
const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived(){
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());


// Andrews Challenge

const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
  // numbers - array of numbers
  // multiplyBy - single numbers
  // multiply - return a new array where the numbers have been multiplied
}

console.log(multiplier.multiply());
