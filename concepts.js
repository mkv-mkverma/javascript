/**
 * 
 */
function sumOnlyNumbers() {  
    var args = arguments; // { '0': 1, '1': 'Hello', '2': 5, '3': false }
    var numbers = filterNumbers();
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    return numbers.reduce((sum, element) => sum + element);
    function filterNumbers() {
        // array.filter(function(currentValue, index, arr), thisValue)
        // Array.prototype.map.call(argsOuter, function(item)
       return Array.prototype.filter.call(args, 
         element => typeof element === 'number'
       );
    }
  }
  sumOnlyNumbers(1, 'Hello', 5, false); // => 6  

////////////////// optimized //////////////////

function sumOnlyNumbers(...args) {  
  var numbers = filterNumbers();
  return numbers.reduce((sum, element) => sum + element);
  function filterNumbers() {
     return args.filter(element => typeof element === 'number');
  }
}
sumOnlyNumbers(1, 'Hello', 5, false); // => 6  

/////////////// destructure an array //////////////////

/**
 * You can extract parts of array using destructuring assignments.
 * In combination with iteration protocols, spread operator can be used in a more configurable manner.
 */
let otherSeasons, autumn;  
[autumn,...otherSeasons] = ['autumn', 'winter','summer'];

console.log(autumn); // autumn
console.log(otherSeasons); // [ 'winter', 'summer' ]

//////////////// construct an array /////////////////

let cold = ['autumn', 'winter'];  
let warm = ['spring', 'summer'];  
[...cold, ...warm] // => ['autumn', 'winter', 'spring', 'summer']

////////////////////////////
  var array = [];
    array.push(1);
    console.log(array)
    array.push.apply(array,[2,3]);
    console.log(array)
    // array.push.apply(array,[4,5]);
    Array.prototype.push.apply(array,[4,5]);
    console.log(array)
    array.push.call(array,6,7);
    console.log(array)
    Array.prototype.push.call(array,8,9);
    console.log(array)
    //[1, 2, 3, 4, 5, 6, 7, 8, 9] 

    /**
     * @output
     * [ 1 ]
     * [ 1, 2, 3 ]
     * [ 1, 2, 3, 4, 5 ]
     * [ 1, 2, 3, 4, 5, 6, 7 ]
     * [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
     */