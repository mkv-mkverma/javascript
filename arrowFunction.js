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
    } catch (error) {
        console.log(error) // Type error
    }
}  
console.log(lengthCalculate()); // expected output: Array [8, 6, 7, 9]

function filterItems(){
    try {
        // return materials.filter(materialsArray => materialsArray.length > 6);
        return materials.filter(materialsArray => materialsArray.toLowerCase().indexOf('um') > -1);
    } catch (error) {
        console.log(error) // Type error
    }
}  
console.log(filterItems()); // [ 'Helium', 'Lithium', 'Beryllium' ]