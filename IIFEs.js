/**
 * An Introduction to IIFEs - Immediately Invoked Function Expressions
 */

(function () {
    // logic here
    console.log("Hello World");
})();

// Named function declaration
function myFunction() {
    /* logic here */
}

// Assignment of a function expression to a variable
var myFunction = function () {
    /* logic here */
};

// Assignment of a function expression to a property
var myObj = {
    myFunction: function () {
        /* logic here */
    }
};

// Anything within the parentheses is part of an expression
(function () {
    /* logic here */
});

// Anything after the not operator is part of an expression
!function () {
    /* logic here */
};

(function () {
    var foo = "bar"; // local variable

    console.log(foo); // bar
})();

// console.log(foo); // ReferenceError: foo is not defined

// you could explicitly name and then invoke a function to achieve the same ends.

function myImmediateFunction() {
    var foo = "bar";

    console.log(foo);  // Outputs: "bar"
}

myImmediateFunction();

// console.log(foo); // ReferenceError: foo is not defined

// It is worth pointing out that you can easily pass arguments into the IIFE as well.

var name = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(name);