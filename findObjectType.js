/**
 * To check if the type of data
 */
var arr = [1, 2, 3];
var obj = { name: "manish", email: "manish@gmail.com" };

console.log(arr);
console.log(obj);

isType('array', arr) // true
isType('array', obj) // false
isType('string', '') // true
isType('string', 1) // false
isType('number', '') // false
isType('number', 1) // true
isType('boolean', 1) // false
isType('boolean', true) // true

// isType = (type, val) => !!(val.constructor && val.constructor.name.toLowerCase() === type.toLowerCase());


function isType(type, val) {
    return !!(val.constructor && val.constructor.name.toLowerCase() === type.toLowerCase());
}