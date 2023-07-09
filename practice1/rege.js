const a = "caPitalize";
console.log(/^[A-Z]/.test(a));

// creando regex constructor
const bob = new RegExp("[^A-Z]");
console.log(bob);
console.log(bob.test("Aea"));

let texto = "Hola amigo cómo andas Estás bien?";
// \s es para espacios en blanco
console.log(texto.replace(/\s/g, "_"));
console.log(texto);

/* 
For the given array, filter all elements that do not contain e.

let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

> items.filter(w => test(w))       // add your solution here
< ["goal", "sit"]
*/
// Sol
const myrege = /e/g;
let items = ["goal", "new", "user", "sit", "eat", "dinner"];
console.log(items.filter((i) => !myrege.test(i)));

/* 
Replace first occurrence of 5 with five for the given string.
let ip = 'They ate 5 apples and 5 oranges'

> ip.replace()       // add your solution here
< "They ate five apples and 5 oranges"
*/

let ip = "They ate 5 apples and 5 5 oranges";
console.log(ip.replace(/5/, "five"));

/* 
let ip = 'They ate 5 apples and 5 oranges'

> ip.replace()      // add your solution here
< "They ate five apples and five oranges"
*/
let ip2 = "They ate 5 apples and 5 oranges";
console.log(ip2.replace(/5/g, "five"));

/* 
 Replace all occurrences of note irrespective of case with X.

> let ip = 'This note should not be NoTeD

> ip.replace()     // add your solution here
< "This X should not be XD"
*/
let mynotes = "This note should not be NoTeD notemore notification noteboy";
console.log(mynotes.replace(/note/gi, "X"));

/* 
 For the given multiline input string, 
 filter all lines NOT containing the string 2.

 let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`
*/
let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;

console.log(
  purchases
    .split("\n")
    .filter((i) => !/2/.test(i))
    .join("\n")
);

/* 
  For the given array, filter all elements that contains either a or w.
  let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
  */
let words = ["goal", "new", "user", "sit", "eat", "dinner"];
console.log(words.filter((word) => /a|w/.test(word)));

/* 
For the given array, filter all elements that contains both e and n.

> let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
*/
let words2 = ["goal", "new", "user", "sit", "eat", "dinner"];
console.log(words2.filter((word) => /e/.test(word) && /n/.test(word)));
