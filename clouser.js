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

/**
 * DELL EMC Question
 * someFunction('Hi')('Javascript Guy,')('You Are Awesome!');
 * @Output : Hi Javascript Guys, You Are Awesome!
 */

function appendString(str1) {
  return function (str2) {
    return function (str3) {
      return (str1 + " " + str2 + " " + str3);
    }
  }
}


console.log(appendString('Hi')('Javascript Guy,')('You Are Awesome!'));

//////////////////////////////////////////////////

// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// We can also write without anonymous functions:

// global scope
var e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20


////////////////// Performance considerations ////////////////////////

/**
 * For instance, when creating a new object/class, methods should normally be associated to the object's prototype rather 
 * than defined into the object constructor. 
 * The reason is that whenever the constructor is called, 
 * the methods would get reassigned (that is, for every object creation).
 */

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();

  this.getMessage = function () {
    return this.message;
  }

  this.getName = function () {
    return this.name;
  }
}

var obj = new MyObject("MyObject", "Hello ");
console.log(obj.getMessage() + " " + obj.getName()); // Hello  MyObject
console.log(obj.name); // MyObject

/*Above code does not take advantage of the benefits of closures, 

ie. No private variables are being used in the public functions. 
So we could instead rewrite it as follows:

*/

function MyObject2(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject2.prototype = {
  getMessage: function () {
    return this.message;
  },
  getName: function () {
    return this.name;
  }
}

var obj2 = new MyObject2("MyObject2", "Hello ");
console.log(obj2.getMessage() + " " + obj2.getName());

/*
It is not a good practice to update the prototype itself. 
So Instead we need to append these functions to the prototype.
*/

function MyObject3(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject3.prototype.getMessage = function () {
  return this.message;
}

MyObject3.prototype.getName = function () {
  return this.name;
}

var obj3 = new MyObject3("MyObject3", "Hello ");
console.log(obj3.getMessage() + " " + obj3.getName());

/*
The same can be re-writted with IIF.
*/

function MyObject4(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

(function () {
  this.getMessage = function (data) {
    console.log(this);
    return this.message + data;
  }

  this.getName = function () {
    return this.name;
  }
}).call(MyObject4.prototype);

var obj4 = new MyObject4("MyObject4", "Hello ");
console.log(obj4.getMessage() + " " + obj4.getName());
