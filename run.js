/**
 * dummy place to run code
 */
// var sayings; // Cannot read property 'set' of undefined
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

