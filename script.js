'use strict';

/*function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scope's variable
      const firstName = 'Jennifer'; //uses this value in the current scope even though there's a dif var with same name in parent

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // works because millenial is a var
    //console.log(add(2, 3)); //error if strict mode, function is block-scoped
    console.log(output); //changed an existing variable inside of the child scope so now output logs NEW OUTPUT! If const used instead of let, would be a different variable and not affect the other one with same name in outer scope.
  }
  printAge();

  return age;
}

const firstName = 'Xanthe';
calcAge(1982); //can have dif variables with the same name, in different scopes. Also can have dif functions with the same parameter names. Each param is only defined in the scope of that function. 

//Hoisting with variables
//console.log(me); // var - hoisted to value 'undefined'
//console.log(job); // let - can't access before initialization. In TDZ.
//console.log(year); // Same error, in TDZ

var me = 'Xanthe';
let job = 'mum';
const year = 1982;

//Hoisting with functions
console.log(addDecl(2, 3)); // prints 5. Can call function declaration before it's defined.
//console.log(addExpr(2, 3)); // can't access before initialiized.
//console.log(addArrow(2, 3)); // var, error states not a function because undefined

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart(); //function runs because at this point, numProducts is undefined. So don't use var. Declare variables at top of each scope. Always declare functions first, use after declaration.

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); //true. Creates property on global window object.
console.log(y === window.x); //false
console.log(z === window.x); //false 
console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); //undefined in strict mode
};
calcAge(1982);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); //lexical this keyword - this of its parent function - so this = window
};
calcAgeArrow(2012);

const xanthe = {
  year: 1982,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};
xanthe.calcAge(); //prints the object - {year:1982, calcAge: f} The next cl prints year.

const imogen = {
  year: 2017,
};

imogen.calcAge = xanthe.calcAge; // copy the method from xanthe to imogen. Method borrowing.
imogen.calcAge(); //prints the imogen object and birthyear. The this keyword always points to the object that's calling the method.

const f = xanthe.calcAge; //copy the function into new variable
f(); //undefined as function not attached to an object 

const xanthe = {
  firstName: 'Xanthe',
  year: 1982,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
  greet: () => console.log(`Hi ${this.firstName}`),
};
xanthe.greet(); //Outputs Hi undefined. Arrow function has no this keyword. Global scope this instead. Best practice not to use arrow functions as methods. 

const xanthe = {
  firstName: 'Xanthe',
  year: 1982,
  calcAge: function () {
    //console.log(this);
    console.log(2021 - this.year);

    //Solution 1
    //const self = this; // pre-es6 solution - self or that
    //const isMillenial = function () {
    //console.log(self);
    //console.log(self.year >= 1981 && self.year <= 1996);
    //console.log(this.year >= 1981 && this.year <= 1996);
    //};

    //Solution 2
    const isMillenial = () => {
      //arrow function gets this from parent scope
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hi ${this.firstName}`);
  },
};
xanthe.greet();
xanthe.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); // doesn't exist in arrow functions
  return a + b;
};
addArrow(2, 5, 8); 

let age = 30;
let prevAge = age;
age = 31;
console.log(age);
console.log(prevAge);

const man = {
  name: 'Jonas',
  age: 30,
};
const friend = man;
friend.age = 27;
console.log('Friend:', friend);
//Friend: {name: "Jonas", age: 27}
console.log('Man:', man);
//Man: {name: "Jonas", age: 27}
*/

//primitive types stored in the call stack
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types stored in the heap
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//copying the reference which points to same object
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
//changes lastName value of original object

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastname = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John'); //targeting an object within the object
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
//the array object changes in both the objects. Only shallow clone was achieved in Object.assign
