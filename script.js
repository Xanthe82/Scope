'use strict';
function calcAge(birthYear) {
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
