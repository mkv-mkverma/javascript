/**
 * convertObjToArray
 */

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};

var res = Object.entries(obj).map((value)=>(value));

console.log(res);

/* $ node convertObjToArray
[ [ '1', 5 ],
  [ '2', 7 ],
  [ '3', 0 ],
  [ '4', 0 ],
  [ '5', 0 ],
  [ '6', 0 ],
  [ '7', 0 ],
  [ '8', 0 ],
  [ '9', 0 ],
  [ '10', 0 ],
  [ '11', 0 ],
  [ '12', 0 ] ]
 */

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.keys(obj).map(function(key) {
//   return [Number(key), obj[key]];
// });
var result = Object.keys(obj).map(key =>   [Number(key), obj[key]]);

console.log(Object.keys(obj)); 
// [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
console.log(Object.entries(obj)); 
/**
 * [ [ '1', 5 ],
  [ '2', 7 ],
  [ '3', 0 ],
  [ '4', 0 ],
  [ '5', 0 ],
  [ '6', 0 ],
  [ '7', 0 ],
  [ '8', 0 ],
  [ '9', 0 ],
  [ '10', 0 ],
  [ '11', 0 ],
  [ '12', 0 ] ]
 */

console.log(result);
/**
 [ [ 1, 5 ],
  [ 2, 7 ],
  [ 3, 0 ],
  [ 4, 0 ],
  [ 5, 0 ],
  [ 6, 0 ],
  [ 7, 0 ],
  [ 8, 0 ],
  [ 9, 0 ],
  [ 10, 0 ],
  [ 11, 0 ],
  [ 12, 0 ] ]
 */