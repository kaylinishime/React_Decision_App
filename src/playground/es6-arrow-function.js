const square = function(x){
  return x * x;
}

// const squareArrow = (x) => {
//   return x * x;
// };

// in an arrow function, you dont need to explicity say RETURN
const squareArrow = (x) => x * x;


console.log(squareArrow(4));

// Andrews Challenge
// use arrow functions
// getFirstName('Mike Smith') --> "Mike"
// Create regular arrow function
  // Create arrow function using shorthand syntax

  const fullName = 'Kayli Nishime';

  const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
  }

  console.log(getFirstName(fullName));

  const getFirstName2 = (fullName) => fullName.split(' ')[0];

  console.log(getFirstName2(fullName));
