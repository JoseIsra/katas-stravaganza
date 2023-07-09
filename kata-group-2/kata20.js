function findArray(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];
  return arr2.map((n) => {
    if (n < arr1.length) {
      return arr1[n];
    }
  });
}

console.log(findArray(["a", "a", "a", "a", "a"], [2, 4]), ["a", "a"]);
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1]);
console.log(findArray([1, 2, 3, 4, 5], [0]), [1]);
console.log(findArray([0, 3, 4], [2, 6]), [4]);
console.log(findArray([1, 2, 3, 4, 5], [4, 2, 0]), [5, 3, 1]);
console.log(findArray([1, 2, 3, 4, 5], [2, 2, 2]), [3, 3, 3]);
console.log(findArray(["this", "is", "test"], [0, 1, 2]), [
  "this",
  "is",
  "test",
]);

/* 
You are given a string representing
a number in binary.
Your task is to delete all the unset bits
in this string and return the corresponding
number (after keeping only the '1's).
*/
function eliminateUnsetBits(number) {
  // const num = number.match(/1/g)
  // if(!num) return 0;
  // return parseInt(Number(num.join('')), 2);

  // BETTER WAY, FLAWLESS!!!
  return parseInt(number.replace(/0/g, "") || 0, 2);
}

console.log(eliminateUnsetBits("11010101010101"), 255);
console.log(eliminateUnsetBits("111"), 7);
console.log(eliminateUnsetBits("1000000"), 1);
console.log(eliminateUnsetBits("000"), 0);

function rectangleArea(sides) {
  return sides.reduce((acc, side) => acc * side, 1);
}
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
function sortByArea(array) {
  if (!array.length) return [];
  return [...array].sort(
    (a, b) =>
      (Array.isArray(a) ? rectangleArea(a) : circleArea(a)) -
      (Array.isArray(b) ? rectangleArea(b) : circleArea(b))
  );
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]), [
  [1.342, 3.212],
  1.23,
  [4.23, 6.43],
  3.444,
]);
console.log(sortByArea([[2, 5], 6]), [[2, 5], 6]);
console.log(sortByArea([]), []);
console.log(
  sortByArea([
    [3.2, 2.24],
    [7.24, 8.79],
    [4.08, 7.41],
    0.88,
    [9.47, 0.03],
    [3.66, 3.24],
  ])
);

const Calculator = {
  add(n1, n2) {
    return n1 + n2;
  },
  subtract(n1, n2) {
    return n1 - n2;
  },
  multiply(n1, n2) {
    return n1 * n2;
  },
  divide(n1, n2) {
    return n2 === 0 ? false : n1 / n2;
  },
};

console.log(Calculator.add(2, 4), 6, "2+4=6");
console.log(Calculator.subtract(5, 3), 2, "5-3=2");
console.log(Calculator.multiply(9, 2), 18, "9x2=18");
console.log(Calculator.divide(12, 4), 3, "12/4=3");
console.log(Calculator.divide(33, 0), false, "Tried to divide by zero");

function sortArray(a1, a2) {
  return a2.sort(
    (a, b) =>
      a1.findIndex((l) => l[0] === a[0]) - a1.findIndex((l) => l[0] === b[0])
  );
}

const a1 = ["jellyfish", "koi", "caribou", "owl", "dolphin"];
const a2 = ["ostrich", "jaguar", "deer", "camel", "kangaroo"];
console.log(sortArray(a1, a2), [
  "jaguar",
  "kangaroo",
  "camel",
  "ostrich",
  "deer",
]);

function alternateCase(s) {
  return s
    .split("")
    .map((l) => {
      if (/[a-z]/.test(l)) {
        return l.toUpperCase();
      } else {
        return l.toLowerCase();
      }
    })
    .join("");
}
console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD");

function XO(str) {
  //code here
  return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);

function openOrSenior(data) {
  // ...
  return data.map((d) => (d[0] >= 55 && d[1] > 7 ? "Senior" : "Open"));
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]),
  ["Open", "Senior", "Open", "Senior"]
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ]),
  ["Open", "Open", "Open", "Open"]
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ]),
  ["Senior", "Open", "Open", "Open"]
);

function sumDigits(number) {
  const nums = String(Math.abs(number)).match(/\d/g);
  return nums.reduce((acc, n) => acc + Number(n), 0);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);

function isTriangle(a, b, c) {
  // a + b > c | a + c  > b | b + c > a

  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);

function getMiddle(s) {
  const indx = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(indx - 1, indx + 1) : s[indx];
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");

function isIsogram(str) {
  // if (!str.length) return true;
  // const result = {};
  // for (let index = 0; index < [...str].length; index+=1) {
  //   const letter = str[index].toLowerCase();
  //   if (!result[letter]) {
  //     result[letter] = true;
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  // besto WAY
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");

function solve(compasses, gears, tablets) {
  const glyps = [compasses, gears, tablets];
  let distinctSets = 0;
  while (compasses > 0 && gears > 0 && tablets > 0) {
    distinctSets += 1;
    compasses = compasses - 1;
    gears = gears - 1;
    tablets = tablets - 1;
  }
  const glyphAmount = glyps
    .map((g) => Math.pow(g, 2))
    .reduce((acc, n) => acc + n, 0);
  return glyphAmount + distinctSets * 7;
}

console.log(solve(0, 0, 0), 0);
console.log(solve(1, 1, 1), 10);
console.log(solve(2, 1, 1), 13);
console.log(solve(4, 2, 2), 38);
console.log(solve(7, 2, 2), 71);

function consonantCount(str) {
  return str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length ?? 0;
}

console.log(consonantCount("bcdfghjklmnpqrstvwxyz"), 21);
console.log(consonantCount("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"), 42);
console.log(consonantCount("01234567890_"), 0);
console.log(
  consonantCount(
    "aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#"
  ),
  42
);

function dominator(arr) {
  const minim = Math.floor(arr.length / 2);
  const amounts = arr.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});
  return (
    Number(
      Object.entries(amounts).find(([key, value]) => value > minim)?.[0]
    ) || -1
  );
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3);
console.log(dominator([1, 2, 3, 4, 5]), -1);
console.log(dominator([1, 1, 1, 2, 2, 2]), -1);
console.log(dominator([1, 1, 1, 2, 2, 2, 2]), 2);
