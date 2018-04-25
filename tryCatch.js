/**
 * The try statement lets you test a block of code for errors.
 * The catch statement lets you handle the error.
 * The throw statement lets you create custom errors.
 * The finally statement lets you execute code, after try and catch, regardless of the result.
 */

(function(){
    var result;
    try {
        adddlert("Welcome guest!");
    } catch (error) {
        console.log(error.message);
        // window.open(`https://stackoverflow.com/search?q=${error.message}`)
    }
})();

function myFunction(x) {
    try { 
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        console.log(err);
    }
    console.log("it will not execute");
    
}
// var number = ''; // empty
// var number = 'a56'; // not a number
// var number = '56'; // too high
// var number = '4'; // too low
var number = 4; // too low
myFunction(number);