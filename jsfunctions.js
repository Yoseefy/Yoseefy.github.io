arr = [5, 6, 8];

function maxThree(x, y, z) {
  return Math.max(x, y, z);
}
function maxTwo(y, z) {
  return Math.max(y, z);
}
function vowel(h) {
  if ((h=='a')||(h=='e')||(h=='o')||(h=='i')||(h=='u')){
    return h;
	}
}
function reverse(str)
{
    for (let i = str.length ; i > 0 ; i--) {
 	  	console.log("Revers:" +str[i-1]);
  }
}
function sum(list) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log("Sum Function:  "+ total);
}
function multiply(list) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
console.log("Multiplication Function:  " + total);
}
console.log("isVowel:" + vowel('u'));
console.log("MaxTwo:   " + maxTwo(5,6));
console.log("MaxThree:   " + maxThree(5,6,7));
reverse(arr);
sum(arr);
multiply(arr);