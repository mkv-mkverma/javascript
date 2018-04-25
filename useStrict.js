/**
 * With strict mode, you can not, for example, use undeclared variables.
 * Strict mode is declared by adding "use strict"; to the beginning of a script(global) or a function.
 * Strict mode makes it easier to write "secure" JavaScript.
 * non-writable property, a getter-only property, a non-existing property, a non-existing variable, 
 *  or a non-existing object, will throw an error.
 * 
 * 
 */
"use strict";
x = 3.14;    // This will cause an error (x is not defined).

myFunction();

function myFunction() {
    y = 3.14;   // This will cause an error (y is not defined)
}

// x = 3.14;       // This will not cause an error. 
// myFunction();

// function myFunction() {
//    "use strict";
//     y = 3.14;   // This will cause an error
// }

// Using a variable(Objects are variables too), without declaring it, is not allowed:
// "use strict";
// x = 3.14;                // This will cause an error
// x = {p1:10, p2:20};      // This will cause an error

// Deleting a variable (or object/function) is not allowed.
// "use strict";
// var x = 3.14;
// delete x;                // This will cause an error
// function x(p1, p2) {}; 
// delete x;                // This will cause an error 

// Duplicating a parameter name is not allowed:
// "use strict";
// function x(p1, p1) {};   // This will cause an error

// Octal numeric literals are not allowed:
// "use strict";
// var x = 010;             // This will cause an error

// Octal escape characters are not allowed
// "use strict";
// var x = "\010";            // This will cause an error

// Deleting an undeletable property is not allowed:
// "use strict";
// delete Object.prototype; // This will cause an error

// Writing to a get-only property is not allowed:
// "use strict";
// var obj = {get x() {return 0} };

// obj.x = 3.14;            // This will cause an error

// Writing to a read-only property is not allowed:
// "use strict";
// var obj = {};
// Object.defineProperty(obj, "x", {value:0, writable:false});

// obj.x = 3.14;            // This will cause an error

/**
 * Future reserved keywords are not allowed in strict mode. These are:

implements
interface
let
package
private
protected
public
static
yield

"use strict";
var public = 1500;      // This will cause an error
 */