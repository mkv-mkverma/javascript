/**
 * Difference between var, let and const
 */

/**
 *  Variable declarations are processed before the execution of the code.
 *  The scope of a JavaScript variable declared with var is its current execution context.
 *  The scope of a JavaScript variable declared outside the function is global.
*/

function varFunction() {
    var a = 10;
    console.log(a); // 10
    // var a = 30; // update globally
    // console.log(a); // 30
    if (true) {
        // overriding the existing value
        // a = 20; // update globally
        var a = 20; // that the value of variable "a" updated 20 globally
        console.log(a); // 20 
    }
    console.log(a); // 20
}

varFunction();

/**
 * The let statement declares a local variable in a block scope.
 * The let statement allows you to create a variable with the scope limited to the block on which it is used.
 */

function letFunction() {
    let a = 10;
    console.log(a); // 10
    //  let a = 20; // Identifier 'a' has already been declared
    // console.log(a); //throws type error
    if (true) {
        //  a = 20 // update globally
        let a = 20; // scope inside if only
        console.log(a); // 20
    }
    console.log(a); // 10
}

letFunction();

/**
 * Declare the const variable in capital letters.
 * const statement values can be assigned once and they cannot be reassigned. 
 * The scope of const statement works similar to let statements.
 */

function constFunction() {
    const MY_VARIABLE = 10;
    console.log(MY_VARIABLE); // 10

    // const MY_VARIABLE = 20; // Identifier 'MY_VARIABLE' has already been declared
    // console.log(MY_VARIABLE); //throws type error
}

constFunction();