const xMarksTheSpot = (input) => {
  let count = 0;
  let coords = [];
  if (!input.length) return [];
  input.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col == "x") {
        count += 1;
        coords.push(i);
        coords.push(j);
      }
    });
  });
  if (count == 0 || count > 1) return [];
  return coords;
};

console.log(xMarksTheSpot([]), []);
console.log(
  xMarksTheSpot([
    ["o", "o"],
    ["o", "o"],
  ]),
  []
);
console.log(
  xMarksTheSpot([
    ["x", "o"],
    ["o", "x"],
  ]),
  []
);
console.log(
  xMarksTheSpot([
    ["x", "o"],
    ["o", "o"],
  ]),
  [0, 0]
);
let input = [
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "x", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
];
console.log(xMarksTheSpot(input), [4, 6]);

/**
 * SURVIVE THE ATTACK
 * */
function hasSurvived(attackers, defenders) {
  // magic here
  let survAtck = 0;
  let survDef = 0;
  const iap = attackers.reduce((acc, n) => acc + n, 0);
  const idp = defenders.reduce((acc, n) => acc + n, 0);

  if (attackers.length == defenders.length) {
    attackers.forEach((att, index) => {
      if (att > defenders[index]) {
        survAtck += 1;
      } else {
        survDef += 1;
      }
    });
  } else {
    if (attackers.length - defenders.length > 0) {
      survAtck = attackers.length - defenders.length;
    } else {
      survDef = defenders.length - attackers.length;
    }
    attackers.forEach((att, index) => {
      if (att && att > defenders?.[index]) {
        survAtck += 1;
      } else {
        survDef += 1;
      }
    });
  }
  return survDef == survAtck ? idp >= iap : survDef > survAtck;
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
console.log(hasSurvived([], [1, 2, 3]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(
  hasSurvived(
    [32, 65, 21, 83, 85, 7, 71, 45, 20, 63],
    [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]
  ),
  false
);

/* 
Implement a pseudo-encryption algorithm which
given a string S and an integer N concatenates 
all the odd-indexed characters of S with
all the even-indexed characters of S,
this process should be repeated N times.

encrypt("012345", 1)  =>  "135024"


ejemplo: 135024
420531

pares: 1 5 2 
impares: 3 0 4
impar + par 304152
p - 3 4 5
i- 0 1 2

*/

function decrypt(encryptedText, n) {
  if (!encryptedText) return encryptedText;
  if (!encryptedText.length || n < 0) return encryptedText;
  let newtext = encryptedText;
  const counter = n % 2 == 0 ? n : n + 2;
  for (let i = 0; i < counter; i++) {
    let _odds = "";
    let _evens = "";
    [...newtext].forEach((l, idx) => {
      if (idx % 2 == 0) {
        _evens += l;
      } else {
        _odds += l;
      }
    });
    newtext = `${_odds}${_evens}`;
  }
  return newtext;
}

// console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");

function encrypt(text, n) {
  // loops
  let newtext = text;
  if (!text.length || n < 0) return text;
  for (let i = 0; i < n; i++) {
    let odds = "";
    let evens = "";
    [...newtext].forEach((l, idx) => {
      if (idx % 2 == 0) {
        odds += l;
      } else {
        evens += l;
      }
    });
    newtext = `${evens}${odds}`;
  }
  return newtext;
}

console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
