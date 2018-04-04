/**
 * write a program two merge two array without using build in function.
 */
var arr1 = ['1', '2', '3'];
var arr2 = ['4', '5', '6', '7'];
var arr3 = [];
var arraylength = arr1.length + arr2.length; // 3 + 4 = 7
for (let index = 0; index < arraylength; index++) {
    if (index < arr1.length)
        arr3[index] = arr1[index];
    else
        arr3[index] = arr2[index - arr1.length];
}
console.log(arr3);
/**
 * The spread operator is used for array construction and destructuring,
 * and to fill function arguments from an array on invocation. 
 * A case when the operator spreads the array (or iterable object) elements.
 */
console.log([...arr1,...arr2]);

/**
 * terminal> node mergeTwoArray.js
 * @output
 * ["1", "2", "3", "4", "5", "6", "7"] 
 */

 ///////////////////////////////////

var cold = ['autumn', 'winter'];  
var warm = ['spring', 'summer'];  
// construct an array
const add =  [...cold, ...warm]
console.log(add);
// function arguments from an array
cold.push(...warm);  
console.log(cold);
/**
 * terminal> node mergeTwoArray.js
 * @output
 * [ 'autumn', 'winter', 'spring', 'summer' ]
 */