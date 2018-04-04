/**
 * W.P to count number of words occurring  in an given String example 
 * Input : str =" Hi Hello Good Morning Hello Hi"
 * Out put : Hi => 2 , Hello => 2 Good => 1 morning => 1
 */

var count = 1; 
// var str = "Indivisibilities"
// var arr = str.toLowerCase().split('').sort();
var str = "Hi Hello Good Morning Hello Hi"
var arr = str.split(' ').sort();
// console.log(arr)
for (i = 0; i < arr.length ; i++) 
{ 
  if (arr[i] != arr[i + 1]){
    console.log(arr[i]+" => "+count)
    count = 1;
  }else{
  count ++;
  }
//   console.log(arr[i]+" => "+count)
}

////////////////////////////////////////

// var num_matches = str.match(/hi/gi).length;
//  console.log(num_matches); // 2

 ///////////////////// howManyRepeated //////////////////////

 function howManyRepeated(str){
  try{ return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
  catch(e){ return 0; } // if TypeError
}
// console.log(howManyRepeated("Indivisibilities")); // 2
console.log(howManyRepeated("aaabbbcccdd")); // 4