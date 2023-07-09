/* 

The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
*/

function isFlush(cards) {
  const first = cards[0];
  const letter = cards[0][first.length - 1];
  return cards.every((c) => c[c.length - 1] == letter);
}

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);
console.log(isFlush(["AD", "4S", "7H", "KC", "5S"]), false);
console.log(isFlush(["AD", "4S", "10H", "KC", "5S"]), false);
console.log(isFlush(["QD", "4D", "10D", "KD", "5D"]), true);
console.log(isFlush(["10D", "4D", "QD", "KD", "5D"]), true);

function search(budget, prices) {
  return prices
    .filter((p) => p <= budget)
    .sort((a, b) => a - b)
    .join(",");
}

console.log(search(3, [6, 1, 2, 9, 2]), "1,2,2");
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14");
console.log(search(0, [6, 1, 2, 9, 2]), "");

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (!arr.length) return 0;
  /* const validEyes = [':',';']
  const validMouths = [')','D']
  const validNoses = ['-','~']
  const allowedFaces = arr.filter(f => validEyes.includes(f[0]) && validMouths.includes(f[f.length - 1])
  )
  return allowedFaces.filter((f)=> {
    if(f.length >= 3) {
      const nose = f.slice(1,f.length-1)
      if(validNoses.includes(nose)) {
        return f;
      }
    } else {
      return f;
    }
  }).length  */

  //BETTER SOLUTION
  return arr.filter((f) => /^[:;][-~]?[)D]$/.test(f)).length;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(countSmileys([";D", ":o)", ":D", ";)", ";D", ":)", ";D"]), 6);
console.log(countSmileys([";~)", ":)", ":-)", ":--)"]), 3);

/* 
MENU
1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

*/

function getOrder(input) {
  /* const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  const regex = new RegExp(menu.map(m => m.toLowerCase()).join('|'),'g')
  const words = input.match(regex)
  const menuMapped = menu.map(m => m.toLowerCase()).reduce((acc,m,i)=> {
    acc[m] = i
    return acc;
  },{})
  const order = words.map(w => menuMapped[w]).sort()
  return order.map(or => menu[or]).join(' '); */

  //BETTER SOLUTION
  const menu = {
    Burger: 1,
    Fries: 2,
    Chicken: 3,
    Pizza: 4,
    Sandwich: 5,
    Onionrings: 6,
    Milkshake: 7,
    Coke: 8,
  };

  const regex = new RegExp(Object.keys(menu).join("|"), "gi");
  return input
    .match(regex)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .sort((a, b) => menu[a] - menu[b])
    .join(" ");
}

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
  "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
);
console.log(
  getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
  "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
);

function titleCase(title, minorWords) {
  const minor = minorWords?.toLowerCase().split(" ") ?? [];
  const ntitle = title.split(" ");
  const first =
    ntitle[0]?.charAt(0).toUpperCase() + ntitle[0]?.slice(1).toLowerCase();
  const result = ntitle.slice(1).map((w) => {
    if (minor.includes(w.toLowerCase())) {
      return w.toLowerCase();
    } else {
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }
  });
  return [first].concat(result).join(" ");
}

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");

/* 

Results:

If the children get what they want, return "Thank you, strange uncle!"
If not, return "Trick or treat!"

RULES!!!!
1 - Each child has at least two candies;
2 - Each child gets the same amount of candy.
3 - No children get the "bomb" ;-)
4 - Packets cannot be divided, each child gets a full packet
*/

function trickOrTreat(children, candies) {
  //coding and coding..
  if (children !== candies.length) return "Trick or treat!";
  if (candies.some((c) => c.includes("bomb"))) return "Trick or treat!";
  if (candies.every((c) => c.filter((c) => c == "candy").length < 2))
    return "Trick or treat!";
  const ind = candies.findIndex((c) => c.includes("candy"));
  const cant = candies[ind].filter((c) => c == "candy").length;
  return candies.every((c) => c.filter((c) => c == "candy").length == cant)
    ? "Thank you, strange uncle!"
    : "Trick or treat!";
}

console.log(
  trickOrTreat(3, [
    ["candy", "apple", "candy"],
    ["candy", "candy"],
    ["candy", "candy"],
  ]),
  "Thank you, strange uncle!"
);

console.log(
  trickOrTreat(3, [
    ["candy", "apple"],
    ["apple", "candy"],
    ["candy", "apple"],
  ]),
  "Trick or treat!"
);

console.log(
  trickOrTreat(3, [
    ["candy", "apple", "candy"],
    ["candy", "candy"],
    ["candy", "candy", "candy"],
  ]),
  "Trick or treat!"
);

console.log(
  trickOrTreat(3, [
    ["candy", "apple", "candy"],
    ["candy", "candy"],
  ]),
  "Trick or treat!"
);

console.log(
  trickOrTreat(3, [
    ["candy", "apple", "candy"],
    ["candy", "candy"],
    ["candy", "bomb", "candy"],
  ]),
  "Trick or treat!"
);

/* 

Double every other digit,
scanning from right to left,
starting from the second
digit (from the right)
*/

function validate(n) {
  const list = [...n.toString()];
  const numbers = [];
  if (list.length == 1) return false;
  if (list.length % 2 == 0) {
    for (let i = list.length - 1; i >= 0; i--) {
      const el = list[i];
      if (i % 2 == 0) {
        const add = Number(el * 2) > 9 ? Number(el) * 2 - 9 : Number(el * 2);
        numbers.unshift(add);
      } else {
        numbers.unshift(Number(el));
      }
    }
  } else {
    for (let i = list.length - 1; i >= 0; i--) {
      const el = list[i];
      if (i % 2 !== 0) {
        const add = Number(el * 2) > 9 ? Number(el) * 2 - 9 : Number(el * 2);
        numbers.unshift(add);
      } else {
        numbers.unshift(Number(el));
      }
    }
  }
  return numbers.reduce((acc, n) => acc + n, 0) % 10 == 0;
}

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
console.log(validate(8675309), false);

function isValidIP(str) {
  const frag = str.split(".");
  if (frag.length !== 4) return false;
  return frag.every(
    (f) =>
      Number(f) >= 0 &&
      Number(f) <= 255 &&
      /^[0-9]*$/.test(f) &&
      Number(f).toString() === f
  );
}
console.log(/^[0-9]*$/.test("04"));
console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);
console.log(isValidIP(""), false);
console.log(isValidIP("abc.def.ghi.jkl"), false);
console.log(isValidIP("123.456.789.0"), false);
console.log(isValidIP("12.34.56"), false);
console.log(isValidIP("01.02.03.04"), false);
console.log(isValidIP("256.1.2.3"), false);
console.log(isValidIP("1.2.3.4.5"), false);
console.log(isValidIP("123,45,67,89"), false);
console.log(isValidIP("1e0.1e1.1e2.2e2"), false);
console.log(isValidIP(" 1.2.3.4"), false);
console.log(isValidIP("1.2.3.4 "), false);
console.log(isValidIP("12.34.56.-7"), false);
console.log(isValidIP("1.2.3.4\n"), false);
console.log(isValidIP("\n1.2.3.4"), false);

"a".toLowerCase();
function alphabetPosition(text) {
  // const words = text.toLowerCase().split(' ');
  // const result = [];
  // words.forEach(word => {
  //     [...word].forEach((w)=> {
  //       if(/[a-zA-Z]/gi.test(w)){
  //           result.push(w.charCodeAt(0) - 96)
  //       }
  //     })
  // });
  // return result.join(' ')
  const test = text.toUpperCase().replace(/[^A-Z]/g, "");
  // .split('').map(c => c.charCodeAt(0) - 64).join(' ')
  console.log(test);
}

console.log(
  alphabetPosition("The sunset sets at  twelve o' clock."),
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
// console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

function list(names) {
  const tail = names.slice(-2);
  const head = names.slice(0, names.length - 2);
  return head
    .map((h) => h.name)
    .concat(tail.map((t) => t.name).join(" & "))
    .join(", ");
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ]),
  "Bart, Lisa, Maggie, Homer & Marge",
  "Must work with many names"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
  "Bart, Lisa & Maggie",
  "Must work with many names"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }]),
  "Bart & Lisa",
  "Must work with two names"
);
console.log(list([{ name: "Bart" }]), "Bart", "Wrong output for a single name");
console.log(list([]), "", "Must work with no names");

function duplicateCount(text) {
  const result = [...text.toLowerCase()].reduce((acc, t) => {
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(result).filter((k) => result[k] >= 2).length;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);

function order(words) {
  // if(!words.length) return "";
  // const seq = words.match(/[0-9]/g).sort()
  // return seq.map(s => words.split(' ').find(w => w.includes(String(s)))).join(' ')

  //BETTER SOLUTION -> CLEANER BRO 😆
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
console.log(order(""), "", "empty input should return empty string");

function nthSmallest(arr, pos) {
  //your code here
  return arr.sort((a, b) => a - b)[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([-5, -1, -6, -18], 4), -1);
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2);
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2);
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3), 2);
