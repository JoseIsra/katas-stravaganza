/* 
Complete the method which returns the number which 
is most frequent in the given input array.
If there is a tie for most frequent number,
  return the largest number among them.

Note: no empty arrays will be given.
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

const prueba = [12, 10, 8, 12, 7, 6, 4, 10, 12];

function highestRank(arr) {
  //Your Code logic should written here
  const amount = arr.reduce((acc, i) => {
    acc[i] = (acc[i] || 0) + 1;
    return acc;
  }, {});
  const maxo = Math.max(...Object.values(amount));
  return Math.max(...Object.keys(amount).filter((n) => amount[n] == maxo));
}
console.log(highestRank(prueba));

// MEJORADO ✨
function highestRank2(arr) {
  //Your Code logic should written here
  return arr.sort(
    (a, b) =>
      arr.filter((i) => i == b).length - arr.filter((i) => i == a).length
  )[0];
}
console.log(highestRank2(prueba));

/* 
To complete this Kata you need to make a 
function multiplyAll/multiply_all which takes an 
array of integers as an argument. 
This function must return another function,
which takes a single integer as an argument 
and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];

*/
const multiplyAll = (arr) => (num) => arr.map((i) => i * num);

console.log(multiplyAll([1, 2, 3])(2));
