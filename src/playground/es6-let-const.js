var nameVar = 'Andrew';
nameVar = 'Mike';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Julie';
// CANNOT redine a variable, only assign -- camt do let nameLet = "Julie"
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName(){
  var petName = 'Hal';
  return petName;
}

getPetName();
// console.log(petName); // cant get this because its not defined in the scope

// LET and CONST are block level scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
