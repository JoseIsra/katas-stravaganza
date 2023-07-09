/* 
function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);

*/

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

function chain(input, fs) {
  return fs.reduce((input, fn) => fn(input), input);
}

console.log(chain(2, [add, mult]));

function sumArray(array) {
  if (!array) return 0;
  if (!array.length) return 0;
  if (array.length == 1) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((acc, n) => acc + n, 0);
}
console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);

function divCon(x) {
  const realInt = x
    .filter((n) => typeof n == "number")
    .reduce((a, b) => a + b, 0);
  const norealInt = x
    .filter((n) => typeof n == "string")
    .reduce((a, b) => a + +b, 0);
  return realInt - norealInt;
}

console.log(divCon([9, 3, "7", "3"]), 2);
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 14);
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 13);

/* 
Write a function toWeirdCase 
(weirdcase in Ruby) that accepts a string,
and returns the same string with all even
indexed characters in each word upper cased,
and all odd indexed characters in each word
lower cased. The indexing just explained is
zero based, so the zero-ith index is even, 
therefore that character should be upper 
cased and you need to start over for each 
word.


*/

function toWeirdCase(string) {
  const words = string.split(" ");
  const result = [];
  words.forEach((w) => {
    let append = "";
    [...w].forEach((l, i) => {
      if (i % 2 == 0) {
        append += l.toUpperCase();
      } else {
        append += l.toLowerCase();
      }
    });
    result.push(append);
  });
  return result.join(" ");
}

console.log(toWeirdCase("This is a test"), "ThIs Is A TeSt");

/* 



*/

function findUniq(arr) {
  const counts = arr.reduce((acc, n, i) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).filter((k) => counts[k] == 1)[0];
}
console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i += 1) {
    if (!String(i).includes("5")) count += 1;
  }
  return count;
}

console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);

function twoOldestAges(ages) {
  const oldest = ages.sort((a, b) => b - a);
  return [oldest[1], oldest[0]];
}

let results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
let results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);

console.log(
  results1[0],
  45,
  "Passed values of [1,5,87,45,8,8] should return [45, 87]"
);
console.log(
  results1[1],
  87,
  "Passed values of [1,5,87,45,8,8] should return [45, 87]"
);
console.log(
  results2[0],
  18,
  "Passed values of [6,5,83,5,3,18] should return [18, 83]"
);
console.log(
  results2[1],
  83,
  "Passed values of [6,5,83,5,3,18] should return [18, 83]"
);

/* 

Write a function that takes a single string (word) as argument.
The function must return an ordered list containing
the indexes of all capital letters in the string.
*/

const capitals = function (word) {
  return word.match(/[A-Z]/g).reduce((acc, l) => {
    acc.push(word.indexOf(l));
    return acc;
  }, []);
};

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);

/* 
function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
};
*/

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]), [
  "I",
  "To",
  "Beg",
  "Life",
]);
console.log(sortByLength(["Longer", "Longest", "Short"]), [
  "Short",
  "Longer",
  "Longest",
]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), [
  "",
  "Pizza",
  "Brains",
  "Moderately",
]);

/* 
The first input array is the key to the correct answers to an exam,
like ["a", "a", "b", "d"]. The second one contains
a student's submitted answers.
The two arrays are not empty and are the same length.
Return the score for this array of answers, giving +4
for each correct answer, -1 for each incorrect answer,
and +0 for each blank answer, represented as an empty
string (in C the space character is used).
*/

function checkExam(array1, array2) {
  // store score
  let score = 0;
  //iterate over the first array and check the second one
  array1.forEach((n, i) => {
    if (n == array2[i]) {
      score += 4;
    } else if (array2[i] == "") {
      score += 0;
    } else {
      score -= 1;
    }
  });
  return score > 0 ? score : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);

/* 
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead


*/
// Return an array
function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, n) => {
    if (n % 3 == 0 && n % 5 == 0) {
      acc.push("FizzBuzz");
    } else {
      if (n % 3 == 0) {
        acc.push("Fizz");
      } else if (n % 5 == 0) {
        acc.push("Buzz");
      } else {
        acc.push(n);
      }
    }
    return acc;
  }, []);
}
var expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"];
console.log(fizzbuzz(10));

/* 

function sumOfMinimums(arr) {
  // your code here
}
*/

function sumOfMinimums(arr) {
  return arr
    .reduce((acc, n) => {
      acc.push(Math.min(...n));
      return acc;
    }, [])
    .reduce((acc, n) => acc + n, 0);
}

console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
  76
);

function myLanguages(results) {
  return Object.entries(results)
    .filter((r) => r[1] >= 60)
    .sort(([, aValue], [, bValue]) => bValue - aValue)
    .reduce((acc, n) => {
      acc.push(n[0]);
      return acc;
    }, []);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }), [
  "Ruby",
  "Python",
]);
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }), [
  "Dutch",
  "Greek",
  "Hindi",
]);
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }), []);

function evenNumbers(array, number) {
  return array.filter((n) => n % 2 == 0).slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(
  evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2),
  [-8, 26]
);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);

Array.prototype.numberOfOccurrences = function (number) {
  return (
    this.reduce((acc, n) => {
      acc[n] = (acc[n] || 0) + 1;
      return acc;
    }, {})[number] || 0
  );
};

var arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4), 2);
