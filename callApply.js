/**
 * 
 */

let countries = ['Moldova', 'Ukraine'];  
let otherCountries = ['USA', 'Japan'];  
countries.push.apply(countries, otherCountries);  
// countries.push(countries, otherCountries);  // [ 'Moldova', 'Ukraine', [Circular], [ 'USA', 'Japan' ] ]
console.log(countries); // => ['Moldova', 'Ukraine', 'USA', 'Japan']  