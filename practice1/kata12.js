function gordon(a) {
  return a
    .split(" ")
    .map((l) =>
      l
        .toUpperCase()
        .replace(/a|A/g, "@")
        .replace(/[eiou]/gi, "*")
    )
    .map((l) => l + "!".repeat(4))
    .join(" ");
}

console.log(
  gordon("What feck damn cake"),
  "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
);
console.log(gordon("are you stu pid"), "@R*!!!! Y**!!!! ST*!!!! P*D!!!!");
console.log(gordon("i am a chef"), "*!!!! @M!!!! @!!!! CH*F!!!!");

1995;
1563;
432;
console.log(432 / 5);
function getNewNotes(salary, bills) {
  const total = salary - bills.reduce((acc, b) => acc + b, 0);
  if (total < 0) return 0;
  return Math.floor(total / 5);
}
console.log(getNewNotes(2000, [500, 160, 400]), 188);
console.log(getNewNotes(1260, [500, 50, 100]), 122);
console.log(getNewNotes(3600, [1800, 350, 460, 500, 15]), 95);
console.log(getNewNotes(1995, [1500, 19, 44]), 86);
console.log(getNewNotes(10000, [1800, 500, 1200, 655, 150]), 1139);
console.log(getNewNotes(2300, [590, 1500, 45, 655, 150]), 0);
console.log(getNewNotes(5300, [1190, 1010, 1045, 55, 10, 19, 55]), 383);

/* 
MULTIPLY A WORD N TIMES

*/

function modifyMultiply(str, loc, num) {
  const s = str.split(" ")[loc];
  return Array.from({ length: num }, (_, i) => s).join("-");
}

console.log(
  modifyMultiply("This is a string", 3, 5),
  "string-string-string-string-string",
  "The string is incorrect"
);
console.log(
  modifyMultiply(
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    2,
    5
  ),
  "around-around-around-around-around"
);

function fireFight(s) {
  return s.replace(/Fire/g, "~~");
}

console.log(
  fireFight(
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
  ),
  "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
);
console.log(
  fireFight("Mast Deck Engine Water Fire"),
  "Mast Deck Engine Water ~~"
);
console.log(
  fireFight(
    "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"
  ),
  "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
);

/* 
Given an array of numbers (in string format), you must return a string. 
The numbers correspond to the letters of the alphabet in reverse order: 
a=26, z=1 etc. You should also account for '!', '?' and ' ' 
that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

// dato cool
/* 
para pasar normalmente de numero a caracter es a.charCodeAt(0) - 96;
para invertirlo se usa 97 +26 (para tomar como el total de donde extraer
  un entero) así => String.fromCharCode(97+26 - parseInt(a))  siendo a un número
*/

function switcher(x) {
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const dictionary = letter.split("").reduce((acc, l, i) => {
    acc[String(letter.length - i)] = l;
    return acc;
  }, {});
  const complete = Object.assign(dictionary, { 27: "!", 28: "?", 29: " " });
  return x.reduce((acc, l) => {
    acc += complete[l];
    return acc;
  }, "");
}
console.log(
  switcher(["24", "12", "23", "22", "4", "26", "9", "8"]),
  "codewars"
);
console.log(
  switcher([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ]),
  "btswmdsbd kkw"
);
console.log(switcher(["4", "24"]), "wc");

/* 
If arr contains [4, 8, 6] then the output should be 2 because 
two numbers need to be added to the array (5 and 7) 
to make it a consecutive array of numbers from 4 to 8.
Numbers in arr will be unique

*/

function consecutive(arr) {
  if (!arr.length) return 0;
  if (arr.length == 1) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) count += 1;
  }
  return count;
}

console.log(consecutive([4, 8, 6]), 2);
console.log(consecutive([1, 2, 3, 4]), 0);
console.log(consecutive([]), 0);
console.log(consecutive([1]), 0);

// BEST AND INTELLIGENT SOLUTION
function consecutive(arr) {
  let l = arr.length;
  return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}

// ARITMETIC PROGRESSION

// function arithmeticSequenceElements(a, d, n) {
//   let total = [String(a)]
//   let init = a;
// 	for (let i = 0; i < n -1 ; i++) {
//     init+=d
//     total.push(init)
//   }
//   return total.join(', ')
// }
// better ways
function arithmeticSequenceElements(a, d, n) {
  let init = [a];
  while (--n) init.push((a += d));
  return init.join(", ");
}

console.log(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
console.log(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
console.log(
  arithmeticSequenceElements(1, -3, 10),
  "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
);
console.log(
  arithmeticSequenceElements(100, -10, 10),
  "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"
);

function twoSort(s) {
  const order = s.sort();
  return [...order[0]].join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]),
  "b***i***t***c***o***i***n"
);
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ]),
  "a***r***e"
);

/* 
tik tak tok chequer bro


0  if a spot is empty,
1 if it is an "X",
2 if it is an "O",


-1 if the board is not yet finished 
AND no one has 
won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
[[0, 0, 1],
[0, 1, 2],
[2, 1, 0]]
*/

// function isSolved(board) {
//   // rows check
//   let row1 = board[0]
//   let row2 = board[1]
//   let row3 = board[2]
//   if(
//     (   row1[0] == 1 && row1[1] == 1 && row1[2] == 1)
//     || (row2[0] == 1 && row2[1] == 1 && row2[2] == 1)
//     || (row3[0] == 1 && row3[1] == 1 && row3[2] == 1)
//     || (row1[0] == 1 && row2[0] == 1 && row3[0] == 1)
//     || (row1[1] == 1 && row2[1] == 1 && row3[1] == 1)
//     || (row1[2] == 1 && row2[2] == 1 && row3[2] == 1)
//     || (row1[0] == 1 && row2[1] == 1 && row3[2] == 1)
//     || (row1[2] == 1 && row2[1] == 1 && row3[0] == 1)
//     ) {
//     return 1
//   }else if(
//       (row1[0] ==   2 && row1[1] == 2 && row1[2] ==  2)
//     || (row2[0] == 2 && row2[1] == 2 && row2[2] == 2)
//     || (row3[0] == 2 && row3[1] == 2 && row3[2] == 2)
//     || (row1[0] == 2 && row2[0] == 2 && row3[0] == 2)
//     || (row1[1] == 2 && row2[1] == 2 && row3[1] == 2)
//     || (row1[2] == 2 && row2[2] == 2 && row3[2] == 2)
//     || (row1[0] == 2 && row2[1] == 2 && row3[2] == 2)
//     || (row1[2] == 2 && row2[1] == 2 && row3[0] == 2)
//     ) {
//     return 2
//   } else {
//     if(board.every(row => !row.includes(0))){
//       return 0
//     } else {
//       return -1
//     }
//   }

// }
// BETTER WAY TOO COOOL
function isSolved(board) {
  board = board.join("-").replace(/,/g, "");
  console.log(board);
  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if (/0/.test(board)) return -1;
  return 0;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ]) === -1
);

/* 
arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]


 */

function findDupsMiss(arr) {
  let copy = arr.slice().sort((a, b) => a - b);
  let missing = undefined;
  let duplicates = [];
  console.log(copy);
  for (let i = 0; i < copy.length; i++) {
    if (duplicates.indexOf(copy[i]) !== -1) continue;
    if (copy[i] === copy[i - 1]) {
      duplicates.push(copy[i]);
      continue;
    }
    if (copy[i - 1] + 1 !== copy[i]) missing = copy[i - 1] + 1;
  }

  return [missing, duplicates];
}

// const arrdemo = [10,9,8,9,6,1,2,4,3,2,5,5,3];
// console.log(findDupsMiss(arrdemo), [7, [2, 3, 5, 9]]);
const arr2 = [
  20, 19, 6, 9, 7, 17, 16, 17, 12, 5, 6, 8, 9, 10, 14, 13, 11, 14, 15, 19,
];
console.log(findDupsMiss(arr2), [18, [6, 9, 14, 17, 19]]);
