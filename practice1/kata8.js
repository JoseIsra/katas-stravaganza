/* 
Given a string of words (x), 
you need to return an array of the words, 
sorted alphabetically by the final character 
in each.
If two words have the same last letter, 
they returned array should show them in
the order they appeared in the given string.

All inputs will be valid.

example : 
last('man i need a taxi up to ubud'), 
['a', 'need', 'ubud', 'i', 'taxi', 'man', 
'to', 'up']);
*/

function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
console.log(last("    "));

/* 
Create a function that returns the sum of 
the two lowest positive numbers given an 
array of minimum 4 positive integers. 
No floats or non-positive integers will be
passed.

For example, when an array is passed like 
[19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] 
should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

/* 
No elements match:
  code   = [1, 2, 3]
  guess  = [4, 5, 6]
  result = {black: 0, white: 0}

2 elements match, both in wrong positions:
  code   = [1, 2, 3]
  guess  = [2, 1, 4]
  result = {black: 0, white: 2}

3 elements match, one in correct position and two in wrong positions:
  code   = [1, 2, 3]
  guess  = [2, 1, 3]
  result = {black: 1, white: 2}

3 elements match, one in correct position and two in wrong positions:
  code   = [0, 0, 0, 1, 1]
  guess  = [2, 2, 0, 0, 0]
  result = {black: 1, white: 2}

*/

function getHints(answer, guess) {
  const res = { black: 0, white: 0 };
  const a = answer.reduce((acc, num, i) => {
    if (num == guess[i]) {
      acc["black"] = (acc["black"] || 0) + 1;
    } else if (num !== guess[i] && guess.includes(answer[i])) {
      acc["white"] = (acc["white"] || 0) + 1;
    }
    return acc;
  }, res);
  console.log(a);
}
console.log(getHints([1, 2, 1, 2], [1, 1, 2, 2]));

const x = [1];
const head = (x) => x[0];
const lasto = (x) => x[x.length - 1];
const init = (x) => x.slice(0, x.length - 1);
const tail = (x) => x.slice(1, x.length - 1);
console.log(head(x));
console.log(lasto(x));
console.log(init(x));
console.log(tail(x));

/* 

Your team is writing a fancy new text editor and 
you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and 
returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string.
Notice the colon and space in between.
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

const y = ["a", "b", "c"];
const number = function (array) {
  return array.map((a, i) => `${i + 1}: ${a}`);
};
console.log(number(y));

/* 

Take an array and remove every second element
from the array. Always keep the first element
and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
--> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't
have to worry about that!

*/
const word = [1, 3, 4, 5, 6, 7, 8, 9, 10];
function removeEveryOther(arr) {
  const first = arr[0];
  const res = arr.slice(1);
  const nums = [];
  for (let i = 1; i < res.length; i += 2) {
    nums.push(res[i]);
  }
  return [first, ...nums];
}
console.log(removeEveryOther(word));

/* 

Complete the method/function so that it converts
dash/underscore delimited words into
camel casing. The first word within 
the output should be capitalized only
if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str) {
  const splitt = str.split(/-|_/);
  if (splitt.length == 0) return "";
  return (
    splitt[0] +
    splitt
      .reduce((acc, w) => {
        w = w[0].toUpperCase() + w.slice(1);
        acc.push(w);
        return acc;
      }, [])
      .slice(1)
      .join("")
  );
}
console.log(toCamelCase("the_stealth_warrior"));

// BETTER FORM
function toCamelCase2(str) {
  return str.replace(/[-_]\w/gi, (match) => {
    return match.charAt(1).toUpperCase();
  });
}
console.log(toCamelCase2("the_stealth_warrior"));

function isSortedAndHow(array) {
  return array.every((n, i) => i == 0 || array[i] >= array[i - 1])
    ? "yes, ascending"
    : array.every((n, i) => i == 0 || array[i] <= array[i - 1])
    ? "no, descending"
    : "no";
}
console.log(isSortedAndHow([1, 2]));

/* 
You will be given an array that contains 
two strings. 
Your job is to create a function 
that will take those two strings 
and transpose them, so that the
strings go from top to bottom instead 
of left to right.
*/

function transposeTwoStrings(array) {
  const l = Math.max(array[0].length, array[1].length);
  const acc = [];
  for (let i = 0; i < l; i += 1) {
    let tuple = `${array[0][i] || " "} ${array[1][i] || " "}`;
    acc.push(tuple);
  }
  return acc.join("\n");
}
console.log(transposeTwoStrings(["joey", "louise"]));

function fakeBin(x) {
  return x.replace(/[0-9]/g, (a, _) => (a < 5 ? 0 : 1));
}
console.log(fakeBin("45385593107843568"));
const a = 1234;
console.log([...String(a)].reverse());
