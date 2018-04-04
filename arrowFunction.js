/**
 * An arrow function expression has a shorter syntax than a function expression and
 * does not have its own this, arguments, super, or new.target. 
 * These function expressions are best suited for non-method functions, and they cannot be used as constructors.
 */

 /**
  * Basic Syntax
  * (param1, param2, …, paramN) => { statements } 
  * (param1, param2, …, paramN) => expression
  * // equivalent to: => { return expression; } 

  * // Parentheses are optional when there's only one parameter name:
  * (singleParam) => { statements }
  * singleParam => { statements }

  * // The parameter list for a function with no parameters should be written with a pair of parentheses.
  * () => { statements }
  */


/**
 * Advanced Syntax
 * 
 * // Parenthesize the body of function to return an object literal expression:
 * params => ({foo: bar}) 

 * // Rest parameters and default parameters are supported
 * (param1, param2, ...rest) => { statements } 
 * (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
 * statements } 

 * // Destructuring within the parameter list is also supported
 * var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; f(); // 6
 */
// var materials = 5
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

function lengthCalculate(){
    try {
        return materials.map(materialsArray => materialsArray.length);
        // return materials.map(({length}) => length);
    } catch (error) {
        console.log(error) // Type error
    }
}  
console.log(lengthCalculate()); // expected output: Array [8, 6, 7, 9]
console.log(materials.map(({length}) => length)); // expected output: Array [8, 6, 7, 9]
function filterItems(){
    try {
        // return materials.filter(materialsArray => materialsArray.length > 6);
        return materials.filter(materialsArray => materialsArray.toLowerCase().indexOf('um') > -1);
    } catch (error) {
        console.log(error) // Type error
    }
}  
console.log(filterItems()); // [ 'Helium', 'Lithium', 'Beryllium' ]

///////////////////// No separate this /////////////////////////////////

/**
 * Until arrow functions, every new function defined its own this value 
 * (a new object in the case of a constructor, undefined in strict mode function calls, 
 * the base object if the function is called as an "object method", etc.). 
 * This proved to be less than ideal with an object-oriented style of programming.
 */

//////////////////// Function body /////////////////////