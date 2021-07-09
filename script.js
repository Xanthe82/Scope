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
console.log(z === window.x); //false */
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
