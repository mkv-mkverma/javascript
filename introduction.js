// variable
var x = 42;     // local
x = 42;         // global
let x = 42;     // block scope 
const prefix = '212';   // constant

// rest parameters
function multiply(multiplier, ...theArgs) { // var arr = multiply(2, 1, 2, 3); => [2, 4, 6]
  return theArgs.map(x => multiplier * x);
}

// this super
function Person() {
  var self = this; 
  self.age = 0;
  setInterval(function growUp() {
    self.age++;  // if here use this, this refer to global object, different from Person.this
  }, 1000);
}
super([arguments]); // calls the parent constructor.

// Destructuring
var foo = ["one", "two", "three"];
var [one, two, three] = foo;  // == var one   = foo[0]; var two   = foo[1];  var three = foo[2];
var [one, ...three] = foo;  // var one = foo[0] ; var three = ["two", "three"];

// operators
var a5 = "Cat" && "Dog";    // t && t returns Dog   return first false expression or last true expression
var o5 = "Cat" || "Dog";    // t || t returns Cat   return first true expression

delete objectName.property;
delete some_array[3]; // == trees[3] = undefined;
today instanceof Date // return true
typeof today;         // returns "object"

//Comprehensions
for(i of [ 1, 2, 3 ]) i*i ;  // [ 1, 4, 9 ]
for (letters of [ "A", "B", "C" ]) letters.toLowerCase();     // [ "a", "b", "c" ]

// Spread operator
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];     // build array using another array
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);             // call function using array as parameter

// try catch user defined exception
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}
throw new UserException("Value too high");

try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}

// promise
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:'  + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}

// for ... in   for ... of
let arr = [3, 5, 7];
arr.foo = "hello";
console.log(arr); // [3, 5, 7, foo: "hello"]

for (let i in arr) {  console.log(i); } // logs "0", "1", "2", "foo"
for (let i of arr) { console.log(i); } // logs "3", "5", "7"

// Number object
Number.parseFloat() / Number.parseInt() / toFixed()
var gasPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 3 });
console.log(gasPrice.format(5.259)); // $5.259

// Math object
Math.abs() / Math.floor() / Math.ceil() / Math.sign()
// String objects    a wrapper around the string primitive data type.
var s = new String("foo"); // Creates a String object
console.log(s); // Displays: { '0': 'f', '1': 'o', '2': 'o'}

// Array Object
var arr = Array(42);  // empty array with length 42
var myArray = new Array("Hello", myVar, 3.14159);
colors.forEach(function(color) { console.log(color); });
var a1 = [5,6];
var a2 = [5,6,'manish'];
function isNumber(value){ return typeof value == 'number'; }
// console.log(a1.every(isNumber));    // all true return true
// console.log(a1.some(isNumber));     // one true return true
console.log(a1.every(isNumber));    // true
console.log(a1.some(isNumber));     // true
console.log(a2.every(isNumber));    // false
console.log(a2.some(isNumber));     // true

// Map object
// var sayings; // Cannot read property 'set' of undefined
var sayings = new Map();
sayings.set("dog", "woof"); 
sayings.set("cat", "meewo"); 
console.log(sayings); // Map { 'dog' => 'woof', 'cat' => 'kitten' }
console.log(sayings.size); // 2
console.log(sayings.length); // undefined

// sayings.get("fox"); // undefined
// sayings.has("bird"); // false
console.log(sayings.get("fox")); // undefined
console.log(sayings.has("bird")); // false
console.log(sayings.has("dog")); // true
console.log(sayings.has("woof")); // false
for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
sayings.delete("dog");
console.log(sayings); // Map { 'cat' => 'meewo' }
sayings.clear();
console.log(sayings); // Map {}

// Set object
var mySet = new Set();
console.log(mySet);

mySet.add(1);
mySet.add(2);
console.log(mySet);
mySet.add("foo");
console.log(mySet);
console.log(mySet.has(1)); // true
console.log(mySet.has(5)); // false
mySet.delete("foo");
console.log(mySet); // Set { 1, 2 }
console.log(mySet.size); // 2
for (let item of mySet) console.log(item); // 1 2
// Set Array convert
Array.from(mySet);
var mySet2 = [0];
// [...mySet2];
mySet2 = new Set([1,2,3,4]); // Set { 1, 2, 3, 4 }
console.log(mySet2);

// generators
function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){  
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}
var sequence = fibonacci();
console.log(sequence.next().value);     // 1

// Reflection
Reflect.has(Object, "assign"); // true
Reflect.apply(Math.floor, undefined, [1.75]);

// closure memory leak
function addHandler() {
  var el = document.getElementById('el');
  el.onclick = function() {
    el.style.backgroundColor = 'red';
  };
}
// fix memory leak
function addHandler(){
  document.getElementById('el').onclick = function(){
    this.style.backgroundColor = 'red';
  };
}
function addHandler() {
  var clickHandler = function() {
    this.style.backgroundColor = 'red';
  };
  (function() {
    var el = document.getElementById('el');
    el.onclick = clickHandler;
  })();
}

// closure object definition
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);

// comparison
// The only case in which (x !== x) is true is when x is NaN.
// Loose equality == , ToNumber(String), ToNumber(Boolean), ToPrimitive(Object)