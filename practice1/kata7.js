/* 

ATM machines allow 4 or 6 digit 
PIN codes and PIN codes cannot 
contain anything but exactly 4 
digits or exactly 6 digits.

If the function is passed a 
valid PIN string, return true, 
else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

const pin = "1231^1";
function validatePIN(pin) {
  if (pin.length == 4 || pin.length == 6) {
    return /^[0-9]*$/.test(pin);
  }
  return false;
}

console.log(validatePIN(pin));

/* 
You are given an unsorted array containing all
the integers from 0 to 100 inclusively.
However, one number is missing. Write a function 
to find and return this number. What are the time
and space complexities of your solution?
*/

const arr1 = [
  9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
  94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
  19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
  55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
  16,
]; // 26
function missingNo(nums) {
  const complete = Array.from({ length: 101 }, (n, i) => i);
  return complete.find((n) => !arr1.includes(n));
}

// better strategy

let arr2 = [
  26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25,
  1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2,
  86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80,
  72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76,
  12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20,
  94,
]; // 40
function missingNoBetter(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0);
}
console.log(missingNoBetter(arr2));

const nums = [-3, -2, -1];
function sumOfDifferences(arr) {
  if (!arr.length || arr.length == 1) return 0;
  const ar = arr.sort((a, b) => b - a);
  return ar[0] - ar[ar.length - 1];
}
console.log(sumOfDifferences(nums));
