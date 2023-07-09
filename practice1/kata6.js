/* 

Given an array of integers.

Return an array, where the first element 
is the count 
of positives numbers and the second 
element is sum of negative numbers.
0 is neither positive nor negative.

If the input is an empty array or is null,
return an empty array.

Example
For input 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
you should return [10, -65].

*/

const numbers = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

function countPositivesSumNegatives(input) {
  if (!input) return [];
  if (!input.length) return [];
  return input.every((n) => (n >= 0 || n <= 0) && !isNaN(n))
    ? [
        input.filter((n) => n > 0).length,
        input.filter((n) => n <= 0).reduce((acc, n) => acc + n, 0),
      ]
    : 0;
}
console.log(countPositivesSumNegatives(numbers));

/* 

You will be given an array of objects (associative arrays in PHP) representing
data about developers who have signed up to attend the next coding meetup that 
you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; 
or There will be no Python developers if no Python developer has signed up.
For example, given the following input array:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
*/
const list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

// Thank you for checking out my kata :)
function getFirstPython(list) {
  const dev = list.find((d) => d.language == "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
}
console.log(getFirstPython(list1));

/* 

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
const str = "How can mirrors be real if our eyes aren't real";

function Jaden(word) {
  return word
    .split(" ")
    .map((st) => st[0].toUpperCase() + st.slice(1))
    .join(" ");
}

console.log(Jaden(str));

function noSpace(x) {
  return x.replace(/\s/g, "");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

/* 

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the 
alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest 
in the original string
*/

function high(x) {
  let values = x
    .split(" ")
    .map((w) => [...w].reduce((acc, l) => acc + l.charCodeAt() - 96, 0));
  return x.split(" ")[values.indexOf(Math.max(...values))];
}
console.log(high("man i need a taxi up to ubud"));

/* 
We want to know the index of the vowels in a given word, 
for example, there are two vowels in the word super
(the second and fourth letters).

So given a string "super", we should return a list of [2, 4].
Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/
function vowelIndices(word) {
  //your code here
  return [...word]
    .map((w, i) => /[aeiouy]/gi.test(w) && i + 1)
    .filter((w) => w);
}
console.log(vowelIndices("xMsUyhMLCbEV"));

/* 

Usually when you buy something, 
you're asked whether your credit card number, phone number
or answer to your most secret question is still correct. However,
since someone could look over your shoulder, you don't want that shown 
on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all 
but the last four characters into '#'.

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/
const num = "1";
function maskify(num) {
  return num.slice(0, -4).replace(/./g, "#") + num.slice(-4);
}
console.log(maskify(num));

/* 

Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it 
should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

const arra = [1, 2, 10, 50, 5];
function solution(nums) {
  return (nums || []).sort((a, b) => b - a);
}
console.log(solution(arra));

/* 
Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the 
first two and last two numbers in the array. order should be as read
left to right (first, second, second last, last),

the same as above, post sorting the array into ascending order,

the same as above, post sorting the array into descending order,

the same as above, post converting the array into ASCII characters
and sorting alphabetically.

The four parts should form a single string, each part 
separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg"

*/

const info = [51, 62, 73, 84, 95, 100, 99, 126];
function sortTransform(a) {
  const asc = [...a].sort((d, b) => d - b);
  const desc = [...a].sort((d, b) => b - d);
  const part1 =
    String.fromCharCode(a[0]) +
    String.fromCharCode(a[1]) +
    String.fromCharCode(a[a.length - 2]) +
    String.fromCharCode(a[a.length - 1]);
  const part2 =
    String.fromCharCode(asc[0]) +
    String.fromCharCode(asc[1]) +
    String.fromCharCode(asc[asc.length - 2]) +
    String.fromCharCode(asc[asc.length - 1]);
  const part3 =
    String.fromCharCode(desc[0]) +
    String.fromCharCode(desc[1]) +
    String.fromCharCode(desc[desc.length - 2]) +
    String.fromCharCode(desc[desc.length - 1]);
  const part4 = a.map((l) => String.fromCharCode(l)).sort();
  const parts4 =
    part4[0] + part4[1] + part4[part4.length - 2] + part4[part4.length - 1];
  return part1 + "-" + part2 + "-" + part3 + "-" + parts4;
}
console.log(sortTransform(info));
console.log(info.slice(info.length - 2));
