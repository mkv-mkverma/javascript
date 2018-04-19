/**
 * A closure is the combination of a function and 
 * the lexical environment within which that function was declared.
 * 
 * lexical scope : inner functions contain the scope of parent functions even 
 * if the parent function has returned.
 */

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function   
  }
  displayName();
}
init();

//////////////////////////////////////////
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
///////////////////////////////////////////////

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

///////////////////////////////////////////////
var addTwo = function (outer) {
  var add = function (inner) {
    return outer + inner;
  }
  return add;
}

console.log(addTwo(5)); // [Function: add]

var addThree = new addTwo(5);
var addFour = new addTwo(5);

console.log(addThree(6)); // 11
console.log(addFour(-5)); // 0

///////////////// Emulating private methods with closures /////////////////////

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

///////////////////////////////////////////////

/**
 * Notice how each of the two counters, counter1 and counter2, maintains its independence from the other. 
 * Each closure references a different version of the privateCounter variable through its own closure. 
 * Each time one of the counters is called, its lexical environment changes by changing the value of this variable; 
 * however changes to the variable value in one closure do not affect the value in the other closure.
 */

/**
 * Using closures in this way provides a number of benefits that are normally associated with object-oriented programming 
 * -- in particular, data hiding and encapsulation.
 */
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

  //////////////////// Closure Scope Chain ////////////////////////////////

// For every closure we have three scopes:-

// Local Scope ( Own scope)
// Outer Functions Scope
// Global Scope

