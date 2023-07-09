/* 
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present 
in list b keeping their order. 
arrayDiff([1,2],[1]) == [2]

If a value is present in b,
all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const list1 = [1, 2, 3];

const list2 = [1, 2];
function arrayDiff(a, b) {
  return a.filter((n) => !b.includes(n));
}

console.log(arrayDiff(list1, list2));

/* 
Complete the function that takes one argument,
a list of words, and returns the length of the longest word in the list.

For example:
['simple', 'is', 'better', 'than', 'complex'] ==> 7
*/

const listword = ["simple", "is", "better", "than", "complex"];

function longest(words) {
  return Math.max(...words.map((w) => w.length));
}
console.log(longest(listword));

function counter() {
  let val = 0;
  return function () {
    return (val += 1);
  };
}
const ame = counter();
console.log(ame());
console.log(ame());

/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num)
that will insert dashes ('-') between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. 
Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  const list = String(num).split("");
  for (let i = 0; i < list.length; i += 1) {
    if (
      parseInt(list[i]) % 2 != 0 &&
      parseInt(list[i + 1]) % 2 != 0 &&
      parseInt(list[i + 1])
    ) {
      list[i] = `${list[i]}-`;
    }
  }
  return list.join("");
}

console.log(insertDash(7709311));

// SÚPER MEJORADO

function insertDashImprovement(num) {
  return num.toString().replace(/([13579])(?=[13579])/g, "$1-");
}
console.log(insertDashImprovement(7709311));

// parámetro tipo rest (...args) debe ir siempre al final, se usa como arreglo dentro de la función
function getItems(fruitList, favoriteFruit, ...args) {
  console.log(args);
  return [...fruitList, ...args, favoriteFruit];
}
console.log(getItems(["banana", "apple"], "pear", "orange"));
