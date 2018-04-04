/**
 * 
 */

let countries = ['Moldova', 'Ukraine'];  
let otherCountries = ['USA', 'Japan'];  
countries.push.apply(countries, otherCountries);  
// countries.push(...otherCountries);  // ['Moldova', 'Ukraine', 'USA', 'Japan']  
// countries.push(countries, otherCountries);  // [ 'Moldova', 'Ukraine', [Circular], [ 'USA', 'Japan' ] ]
console.log(countries); // => ['Moldova', 'Ukraine', 'USA', 'Japan']  

///////////////////////////////////////

class King {  
    constructor(name, country) {
      this.name = name;
      this.country = country;     
    }
    getDescription() {
        /**
         * @url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
         */
      return `${this.name} leads ${this.country}`;
    //   return this.name + " leads " + this.country;
    }
 }
 var details = ['Alexander the Great', 'Greece'];  
 var Alexander = new King(...details);  
 Alexander.getDescription(); // => 'Alexander the Great leads Greece'  
console.log(Alexander.getDescription())
