// // const arrayToSearch = [[1,2],[3,4],[5,6]];
// const bigArray = [
//   [2, 3],
//   [7, 2],
//   [9, 20],
//   [1, 2],
//   [7, 2],
//   [45, 4],
//   [7, 87],
//   [4, 5],
//   [2, 7],
//   [6, 32],
// ];

// var searchArray = function (arrayToSearch, query) {
//   if (!arrayToSearch.every((p) => Array.isArray(p))) throw Error("error");
//   if (!arrayToSearch.every((p) => p.length == 2)) throw Error("error");
//   if (query.length !== 2) throw Error("error");
//   // TRUCO PARA COMPARAR DOS ARREGLOS QUE NO CONTIENEN OBJETOS
//   return arrayToSearch.findIndex(
//     (p) => JSON.stringify(p) == JSON.stringify(query)
//   );
// };

// const searchFor1 = [9, 20];
// const searchFor2 = [1, 12];
// const searchFor3 = [7, 2];
// console.log(searchArray(bigArray, searchFor1), 2);
// console.log(searchArray(bigArray, searchFor2), -1);
// console.log(searchArray(bigArray, searchFor3), 1);

// const arr = (n = 2) => {
//   return Array.from({ length: n }, (_, i) => i);
// };

// console.log((arr(4), [0, 1, 2, 3]));

// function stantonMeasure(arr) {
//   const ones = arr.filter((n) => n == 1).length;

//   return arr.filter((n) => n == ones).length;
// }

// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]), 3);

// /*
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// */

// function toAcronym(inp) {
//   return inp
//     .split(" ")
//     .map((w) => w.charAt(0).toUpperCase())
//     .join("");
// }

// let tests = [
//   ["Code Wars", "CW"],
//   ["Water Closet", "WC"],
//   ["Portable Network Graphics", "PNG"],
//   ["PHP: Hypertext Preprocessor", "PHP"],
//   ["hyper text markup language", "HTML"],
// ];
// tests.forEach(([inp, exp]) => console.log(toAcronym(inp), exp));

// /*
// Given a string made up of letters
// a, b, and/or c,
// switch the position of letters
// a and b (change a to b and vice versa).
// Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
// */

// function switcheroo(x) {
//   return [...x].map((w) => (w == "a" ? "b" : w == "b" ? "a" : w)).join("");
// }

// console.log(switcheroo("abc"), "bac");
// console.log(switcheroo("aaabcccbaaa"), "bbbacccabbb");
// console.log(switcheroo("ccccc"), "ccccc");

// function stockList(listOfArt, listOfCat) {
//   // --------------VERSION 1 -------------------
//   // if(!listOfArt.length || !listOfCat.length) return "";
//   // const total = listOfCat.reduce((acc, cat)=> {
//   //   const stocks = listOfArt.filter(a => {
//   //     const [code,stock] = a.split(' ');
//   //     return cat == code.charAt(0)
//   //   })
//   //   acc[cat] = stocks.reduce((acc,stock)=> acc+ +stock.split(' ')[1] ,0)
//   //   return acc;
//   // },{})

//   // return Object.keys(total).map(i => `(${i} : ${total[i]})`).join(' - ')
//   // ................................

//   // ------------------VERSION 2--------------------
//   const info = {};
//   if (!listOfArt.length || !listOfCat.length) return "";
//   listOfArt.forEach((l) => {
//     const cat = l[0];
//     info[cat] = (info[cat] | 0) + +l.split(" ")[1];
//   });

//   return listOfCat
//     .map((c) => {
//       return `(${c} : ${info[c] | 0})`;
//     })
//     .join(" - ");
// }

// let b, c, res;
// b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
// c = ["A", "B", "C", "D"];
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
// console.log(stockList(b, c), res);

// const encryption = (word) => {
//   const odds = [...word].filter((_, i) => i % 2 != 0).join("");
//   const even = [...word].filter((_, i) => i % 2 == 0).join("");
//   return `${odds}${even}`;
// };

// function encrypt(text, n) {
//   if (!text.length || n < 0) return text;

//   let word = text;
//   for (let i = 0; i < n; i++) {
//     word = encryption(word);
//   }
//   return word;
// }

// function decrypt(encryptedText, n) {}

// console.log(encrypt("This is a test!", 0), "This is a test!");
// console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3), " Tah itse sits!");

// console.log(encrypt("012345", 2), "304152");

// function newAvg(arr, newavg) {
//   const total = arr.reduce((acc, el) => acc + el, 0);
//   const last = Math.ceil((arr.length + 1) * newavg - total);
//   if (last <= 0) throw Error("Expected New Average is too low");
//   return last;
// }

// console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
// console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);

// // expect(function(){ newAvg([14, 30, 5, 7, 9, 11, 15], 2); }).to.throw("Expected New Average is too low");

// /*
// We need to write a function that takes
// this collection and returns the number
// of points our team (x)
// got in the championship by the rules given above.

// ---Points
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// */

// function points(games) {
//   return games.reduce((acc, points) => {
//     const [left, right] = points.split(":");
//     if (left > right) {
//       acc += 3;
//     }
//     if (left < right) {
//       acc += 0;
//     }
//     if (left == right) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }
// console.log(
//   points([
//     "1:0",
//     "2:0",
//     "3:0",
//     "4:0",
//     "2:1",
//     "3:1",
//     "4:1",
//     "3:2",
//     "4:2",
//     "4:3",
//   ]),
//   30
// );
// console.log(
//   points([
//     "1:1",
//     "2:2",
//     "3:3",
//     "4:4",
//     "2:2",
//     "3:3",
//     "4:4",
//     "3:3",
//     "4:4",
//     "4:4",
//   ]),
//   10
// );
// console.log(
//   points([
//     "0:1",
//     "0:2",
//     "0:3",
//     "0:4",
//     "1:2",
//     "1:3",
//     "1:4",
//     "2:3",
//     "2:4",
//     "3:4",
//   ]),
//   0
// );
// console.log(
//   points([
//     "1:0",
//     "2:0",
//     "3:0",
//     "4:0",
//     "2:1",
//     "1:3",
//     "1:4",
//     "2:3",
//     "2:4",
//     "3:4",
//   ]),
//   15
// );

// function reverse(str) {
//   // if(!str.length) return str
//   const words = str.trim().split(" ");
//   return words
//     .map((w, i) => {
//       if (i % 2 !== 0) {
//         return [...w.trim()].reverse().join("");
//       }
//       return w;
//     })
//     .join(" ");
// }
// console.log(
//   reverse("Reverse this string, please!"),
//   "Reverse siht string, !esaelp"
// );
// console.log(
//   reverse("I really don't like reversing strings!"),
//   "I yllaer don't ekil reversing !sgnirts"
// );
// console.log(reverse(" "));

// // input: names - unsorted array
// // output: sorted array
// function sortme(names) {
//   return names.sort();
// }

// console.log(sortme(["one", "two", "three"]), ["one", "three", "two"]);

// // return the total number of photos.
// // it should return an integer
// function countPhotos(road) {
//   let photos = 0;
//   // get camera position
//   const cameras = [...road].reduce((acc, el, i) => {
//     if (el == ".") {
//       acc[i] = el;
//     }
//     return acc;
//   }, {});

//   // const test = [...road].forEach((el,i)=> {
//   //   if(el == '>') {
//   //     const positions = Object.keys(cameras)
//   //     photos+= positions.filter(d => d > i).length
//   //   } else if(el == '<') {
//   //     const positions = Object.keys(cameras)
//   //     photos+= positions.filter(d => d < i).length
//   //   }
//   // })
//   for (let i = 0; i < road.length; i++) {
//     if (road[i] == ">") {
//       const positions = Object.keys(cameras);
//       photos += positions.filter((d) => d > i).length;
//     } else if (road[i] == "<") {
//       const positions = Object.keys(cameras);
//       photos += positions.filter((d) => d < i).length;
//     }
//   }
//   return photos;
// }
// console.log(countPhotos(">.>..<"), 8);

// //BETTER solutION OPTIMIZED

// function countPhotos(road) {
//   let result = 0,
//     cam_count = 0,
//     right_count = 0;
//   for (let i = 0; i < road.length; ++i) {
//     if (road[i] == ".") {
//       result += right_count;
//       cam_count += 1;
//     } else if (road[i] == "<") {
//       result += cam_count;
//     } else if (road[i] == ">") {
//       right_count += 1;
//     }
//   }
//   return result;
// }

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || !arrayOfArrays.length) return 0;
  if (arrayOfArrays.some((e) => !e || !e.length)) return 0;
  //max
  const max = arrayOfArrays.sort((a, b) => b.length - a.length)[0].length;
  const min = arrayOfArrays.sort((a, b) => a.length - b.length)[0].length;
  const sum = arrayOfArrays.reduce((acc, e) => acc + e.length, 0);
  // sum total
  const total = ((max - min + 1) / 2) * (min + max);
  return total - sum;
}

console.log(
  getLengthOfMissingArray([
    [4, 3, 0, 0, 4],
    [4, 3, 1, 1, 2, 1, 2],
    [4, 0, 3, 3],
    [4, 0, 2, 3, 4, 2, 1, 2, 0],
    [1, 1, 4, 1, 0, 3, 2, 3, 0, 4],
    [2, 3, 0, 4, 2, 3, 4, 2, 2, 2, 0],
    [1, 2, 0, 3, 4, 2, 2, 0],
    [1, 2, 3, 3, 0, 2, 0, 3, 4, 2, 1, 3],
    [4, 1, 1, 1, 0, 2, 4, 0, 0, 4, 1, 0, 1],
    [0, 2, 0, 0, 4, 1, 0, 2, 4, 0, 1, 0, 2, 3],
  ]),
  6
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ]),
  5
);
