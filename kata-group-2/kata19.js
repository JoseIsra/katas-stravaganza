function alternate(n, firstValue, secondValue) {
  // your code
  if (n == 0) return [];
  return Array.from({ length: n }, (_, i) => {
    const idx = i + 1;
    if (idx % 2 == 0) {
      return secondValue;
    }
    return firstValue;
  });
}

console.log(alternate(5, true, false), [true, false, true, false, true]);

console.log(alternate(20, "blue", "red"), [
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
]);

console.log(alternate(0, "lemons", "apples"), []);

function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  const counts = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  console.log(counts);
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]), [4, 3, 1]);

function spacey(array) {
  return array.map((n, i) => array.slice(0, i + 1).join(""));
}

console.log(spacey(["kevin", "has", "no", "space"]), [
  "kevin",
  "kevinhas",
  "kevinhasno",
  "kevinhasnospace",
]);
console.log(spacey(["this", "cheese", "has", "no", "holes"]), [
  "this",
  "thischeese",
  "thischeesehas",
  "thischeesehasno",
  "thischeesehasnoholes",
]);

function maxProduct(a) {
  const max1 = Math.max(...a);
  const idx = a.indexOf(max1);
  const result1 = a.splice(idx, 1)[0];
  const max2 = Math.max(...a);
  return result1 * max2;
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
// console.log(maxProduct([154, 428, 455, 346]), 194740);
// console.log(
//   maxProduct([
//     39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411,
//   ]),
//   187827
// );
// console.log(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
// console.log(
//   maxProduct([
//     354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89,
//   ]),
//   218536
// );
// console.log(
//   maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]),
//   192672
// );
// console.log(maxProduct([134, 320, 266, 299]), 95680);
// console.log(
//   maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]),
//   139496
// );
// console.log(maxProduct([375, 56, 337, 466, 203]), 174750);

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
);
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");

const sing = function () {
  const bottles = Array.from({ length: 99 });
  const lyrics = [];
  for (let i = bottles.length; i > 0; i -= 1) {
    const line1 = `${i} ${
      i === 1 ? "bottle" : "bottles"
    } of beer on the wall, ${i} ${i === 1 ? "bottle" : "bottles"} of beer.`;
    const amount =
      i === 1
        ? "no more bottles"
        : `${i - 1} ${i === 2 ? "bottle" : "bottles"}`;
    const line2 = `Take one down and pass it around, ${amount} of beer on the wall.`;
    lyrics.push(line1);
    lyrics.push(line2);
  }
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
  return lyrics;
};

console.log(sing()[0], "99 bottles of beer on the wall, 99 bottles of beer.");
console.log(
  sing()[199],
  "Go to the store and buy some more, 99 bottles of beer on the wall."
);

const helloWorld = () => {
  // MY WAY
  // const hello = [72, 101, 108, 108, 111, 44, 32];
  // const world = [87, 111, 114, 108, 100, 33];
  // const statement = hello
  //   .map((w) => String.fromCharCode(w))
  //   .concat(world.map((w) => String.fromCharCode(w)))
  // return statement.reduce((acc, w)=> acc + w,String.fromCharCode());

  // A BETTER WAY
  // we have learned that source for regex returns
  // the string containing the source text of this regular
  // expression  without the two slashes on both sides
  return /Hello, World!/.source;
};

console.log(helloWorld());

function secondSymbol(s, symbol) {
  // MY WAY
  // if(!s.includes(symbol)) return -1;
  // let count = 0;
  // let theindex = -1
  // for (let i = 0; i < [...s].length; i+=1) {
  //   const letter = s[i];

  //   if (letter === symbol) {
  //     count +=1;
  //     if(count === 2) {
  //       return i
  //     }
  //   }
  // }
  // return -1;

  // ANOTHER COOL WAY
  // WE HAVE LEARNED THAT INDEXOF ACCEPTS A SECOND OPTIONAL PARAMETER
  // THIS SECOND OPTIONAL PARAMETER MEANS THE INITIAL POSITION FROM
  // WHERE TO START THE SEARCHING
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
}

console.log(
  secondSymbol("Hello world!!!", "l"),
  3,
  'Find the index of the second symbol "l" in the string'
);
console.log(
  secondSymbol("Hello world!!!", "o"),
  7,
  'Find the index of the second symbol "o" in the string'
);
console.log(
  secondSymbol("Hello world!!!", "A"),
  -1,
  'The symbol "A" is not in the string'
);
console.log(secondSymbol("", "q"), -1, 'The symbol "q" is not in the string');
console.log(
  secondSymbol("Hello", "!"),
  -1,
  'The symbol "!" is not in the string'
);

function accum(s) {
  // your code
  return [...s]
    .map((l, idx) => `${l.toUpperCase()}${l.repeat(idx).toLowerCase()}`)
    .join("-");
}

console.log(
  accum("Zpg"),
  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
console.log(
  accum("NyffsGeyylB"),
  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
);
console.log(
  accum("MjtkuBovqrU"),
  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
);
console.log(
  accum("EvidjUnokmM"),
  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
);
console.log(
  accum("HbideVbxncC"),
  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
);
