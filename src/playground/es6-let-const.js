//var (var never that)
//Can reassign and redefine var variable e.g.
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);



//let (let second)
//Can reassign a let variable but not redefine e.g.
let nameLet = 'Jen'; 
nameLet = 'Julie'
console.log('nameLet', nameLet);

//const (use const first)
//cannot reassign or redefine them e.g.
const nameConst = 'Frank';
console.log('nameConst', nameConst);

//function scope (var, let and const) will get an Error!
// function getPetName() {
//     const petName = 'Hal';
//     return petName;
// }
// getPetName();
// console.log(petName);


//block scoping

const fullName = 'Gawah Chan';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);