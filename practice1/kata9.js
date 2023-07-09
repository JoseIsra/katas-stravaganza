/* 
Ben has a very simple idea to make 
some profit: he buys something 
and sells it again. Of course,
this wouldn't give him any profit
at all if he was simply to buy and 
sell it at the same price. Instead,
he's going to buy it for the lowest 
possible price and sell it at the highest.

[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));

/* 
You get an array of numbers, return the sum 
of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum,
the sum is default to 0.

*/

function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((acc, n) => acc + n, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

/* 
Complete the square sum function so that 
it squares each number passed 
into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
*/

function squareSum(numbers) {
  return numbers.reduce((acc, n) => acc + n * n, 0);
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);

/* 
You live in the city of Cartesia 
where all roads are laid out in a
perfect grid. You arrived ten minutes
too early to an appointment,
so you decided to take the 
opportunity to go for a short walk.
The city provides its citizens with a
Walk Generating App on their phones
-- everytime you press the button 
it sends you an array of one-letter 
strings representing directions 
to walk (eg. ['n', 's', 'w', 'e']). 
*/
function isValidWalk(walk) {
  if (walk.length != 10) return false;
  const directions = walk.reduce(
    (acc, w) => {
      acc[w] = (acc[w] || 0) + 1;
      return acc;
    },
    {
      n: 0,
      s: 0,
      w: 0,
      e: 0,
    }
  );
  if (directions.n - directions.s == 0 && directions.e - directions.w == 0)
    return true;
  return false;
}

console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
console.log(!isValidWalk(["w"]), "should return false");
console.log(
  !isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((s) => s).length;
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1), 17, "There are 17 sheeps in total");

/* 
Given an array of ones and zeroes,
convert the equivalent binary value
to an integer.

Eg: [0, 0, 0, 1]
is treated as 0001
which is the binary representation of 1.
*/
// function binaryArrayToNumber(arr){
// let sum=0;
//   for (let i = 0; i < arr.length; i++) {
//     const n = arr[i];
//     const times = arr.length -1 - i
//   sum += n*(Math.pow(2,times))
//   }
//   return sum
// }

// COOL VERSION
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}
console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);

/* 
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/
const b = [3, 5, 3];
const a = Math.min(3, 5, 3);
console.log(a);
console.log(b.indexOf(a));
function removeSmallest(numbers) {
  if (!numbers.length) return [];
  const min = Math.min(...numbers);
  return numbers.filter((_, i) => numbers.indexOf(min) != i);
}

console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  [2, 3, 4, 5],
  "Wrong result for [1, 2, 3, 4, 5]"
);
console.log(
  removeSmallest([5, 3, 2, 1, 4]),
  [5, 3, 2, 4],
  "Wrong result for [5, 3, 2, 1, 4]"
);
console.log(
  removeSmallest([2, 2, 1, 2, 1]),
  [2, 2, 2, 1],
  "Wrong result for [2, 2, 1, 2, 1]"
);
console.log(removeSmallest([]), [], "Wrong result for []");

/* 
he goal of this exercise is to
  const str = oveSmallest([]), [], "Wron.reduce((acc,w)=> {
      if(counts[w])
      return acc
  },'')
convert a string to a new string
where each character in the new
  const str = 
string is "(" he goal of thi.reduce((acc,w)=> {
    if(counts[w])
    return acc
},'')if that character
appears only once in the original
  const str = g to a ne.reduce((acc,w)=> {
      if(counts[w])
      return acc
  },'')
string, or ")" if that character
appears more than once in the
  const str = 
originf that character
appear.reduce((acc,w)=> {
    if(counts[w])
    return acc
},'')al string.
Ignore capitalization
when determining if a 
character is a duplicate.
*/
function duplicateEncode(word) {
  const counts = [...word.toLowerCase()].reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});
  const str = [...word.toLowerCase()].reduce((acc, w) => {
    if (counts[w] > 1) {
      acc += ")";
    } else {
      acc += "(";
    }
    return acc;
  }, "");
  return str;
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");

const numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function () {
  const arr = this;
  return arr.reduce((acc, n) => {
    acc.push(Math.pow(n, 2));
    return acc;
  }, []);
};
Array.prototype.cube = function () {
  const arr = this;
  return arr.reduce((acc, n) => {
    acc.push(Math.pow(n, 3));
    return acc;
  }, []);
};
Array.prototype.sum = function () {
  const arr = this;
  return arr.reduce((acc, n) => acc + n, 0);
};
Array.prototype.average = function () {
  const arr = this;
  if (!arr.length) return NaN;
  return arr.reduce((acc, n) => acc + n, 0) / arr.length;
};
Array.prototype.even = function () {
  const arr = this;
  return arr.filter((n) => n % 2 == 0);
};
Array.prototype.odd = function () {
  const arr = this;
  return arr.filter((n) => n % 2 != 0);
};
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15, "Wrong sum");
console.log(numbers.average(), 3, "Wrong average");
console.log(numbers.even(), [2, 4], "Wrong result for even()");
console.log(numbers.odd(), [1, 3, 5], "Wrong result for odd()");
