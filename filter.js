/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 */

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/**
 * var newArray = arr.filter(callback[, thisArg])
 * callback is invoked with three arguments:
 * 1. the value of the element
 * 2. the index of the element
 * 3. the Array object being traversed
 * 
 * array.filter(function(currentValue, index, arr), thisValue)
 */
const result = words.filter(word => word.length > 6);

console.log(result);
/**
 * @output
 * [ 'exuberant', 'destruction', 'present' ]
*/
///////////////////// Filtering out all small values //////////////////////
function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// same as above
// var filtered = [12, 5, 8, 130, 44].filter(arr => arr >= 10);
console.log(filtered);
/**
 * @output
 * [12, 130, 44]  
*/         
/////////// searching in array ///////////////

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
/**
 * Array filters items based on search criteria (query)
 */

function filterItems(query) {
    return fruits.filter(value => value.toLowerCase().indexOf(query.toLowerCase()) > -1)
    
} 
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

/////////////// Filtering invalid entries from JSON ////////////////////
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
var invalidCount = 0;
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }

  function filterById(value){

    if(isNumber(value.id) && value.id !== 0){
        return true;
    }else{
        invalidCount++;
        return false;
    }
  };
  
var arrResult = arr.filter(filterById);
console.log(arrResult)  // [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]