/**
 * To Reverse a String
 */
var str = "My name is Manish Verma"
var revStr = "";

revStr = str.split(' ').reverse().join(' ');

console.log(revStr);

/**
 * terminal> node reverseString.js
 * @output
 * Verma Manish is name My
 */
