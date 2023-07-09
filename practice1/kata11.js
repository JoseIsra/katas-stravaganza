mirror = (obj) => {
  return Object.keys(obj).reduce((acc, k) => {
    acc[k] = [...k].reverse().join("");
    return acc;
  }, {});
};

console.log(
  mirror({
    abc: undefined,
    arara: undefined,
  })
);

function setContentAt(origin, ind, character) {
  if (ind > origin.length - 1) return origin;
  return origin.substring(0, ind) + character + origin.substring(ind + 1);
}

const encryptThis = function (text) {
  return text
    .split(" ")
    .map((t) => {
      let copy = t;
      let sec = t[1];
      let last = t[t.length - 1];
      if (!sec) return t;
      copy = setContentAt(t, 1, last);
      copy = setContentAt(copy, copy.length - 1, sec);
      return copy;
    })
    .map((l) => l.charCodeAt(0) + l.slice(1))
    .join(" ");
};
console.log(encryptThis("A"), "65");
console.log(
  encryptThis("A wise old owl lived in an oak"),
  "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
);
console.log(
  encryptThis("The more he saw the less he spoke"),
  "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
);
console.log(
  encryptThis("The less he spoke the more he heard"),
  "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
);
console.log(
  encryptThis("Why can we not all be like that wise old bird"),
  "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
);
console.log(
  encryptThis("Thank you Piotr for all your help"),
  "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
);

// SUPER MEJORADO

const encryptThisBetter = function (text) {
  return text
    .split(" ")
    .map((t) =>
      t
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, t.charCodeAt(0))
    )
    .join(" ");
};

console.log(encryptThisBetter("A"), "65");
console.log(
  encryptThisBetter("A wise old owl lived in an oak"),
  "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
);
console.log(
  encryptThisBetter("The more he saw the less he spoke"),
  "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
);
console.log(
  encryptThisBetter("The less he spoke the more he heard"),
  "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
);
console.log(
  encryptThisBetter("Why can we not all be like that wise old bird"),
  "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
);
console.log(
  encryptThisBetter("Thank you Piotr for all your help"),
  "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
);

const vowelsMap = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  return [...string].map((l) => vowelsMap[l] || l).join("");
}

function decode(string) {
  return [...string]
    .map((l) => {
      if (Object.keys(vowelsMap).some((v) => vowelsMap[v] == l)) {
        return Object.keys(vowelsMap).find((v) => vowelsMap[v] == l);
      }
      return l;
    })
    .join("");
}

console.log(encode("hello"), "h2ll4");
console.log(encode("How are you today?"), "H4w 1r2 y45 t4d1y?");
console.log(encode("This is an encoding test."), "Th3s 3s 1n 2nc4d3ng t2st.");
console.log(decode("h2ll4"), "hello");

// BETTER FORM
const table = ["a", "e", "i", "o", "u"];
function encodeBetter(string) {
  return [...string].map((l) => table.indexOf(l) + 1 || l).join("");
}

function decodeBetter(string) {
  return [...string].map((l) => table[+l - 1] || l).join("");
}

console.log(encodeBetter("hello"), "h2ll4");
console.log(encodeBetter("How are you today?"), "H4w 1r2 y45 t4d1y?");
console.log(
  encodeBetter("This is an encoding test."),
  "Th3s 3s 1n 2nc4d3ng t2st."
);
console.log(decodeBetter("h2ll4"), "hello");

/* 
the second and the last letter 
is switched (e.g. Hello becomes Holle)
the first letter is replaced by 
its character code (e.g. H becomes 72)
*/

function decipherThis(str) {
  return str
    .split(" ")
    .reduce((acc, w) => {
      let word = w.replace(/(^\d*)/, (a) => String.fromCharCode(a));
      acc.push(word);
      return acc;
    }, [])
    .map((l) => l.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`))
    .join(" ");
}
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
  "Have a go at this and see how you do"
);

function wave(str) {
  if (!str.length) return [];

  let words = [];

  for (let i = 0; i < str.length; i += 1) {
    let word;
    if (str[i] == " ") {
      let wrd = str[i + 1] + str.slice(i + 2);
      word =
        wrd.substring(0, i) +
        wrd.charAt(i).toUpperCase() +
        wrd.substring(i + 1);
    } else {
      word =
        str.substring(0, i) +
        str.charAt(i).toUpperCase() +
        str.substring(i + 1);
      words.push(word);
    }
  }
  return words;
}
let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), result, "Should return: '" + result + "'");

result = [
  "Codewars",
  "cOdewars",
  "coDewars",
  "codEwars",
  "codeWars",
  "codewArs",
  "codewaRs",
  "codewarS",
];
console.log(wave("codewars"), result, "Should return: '" + result + "'");

result = [];
console.log(wave(""), result, "Should return: '" + result + "'");

result = [
  "Two words",
  "tWo words",
  "twO words",
  "two Words",
  "two wOrds",
  "two woRds",
  "two worDs",
  "two wordS",
];
console.log(wave("two words"), result, "Should return: '" + result + "'");

result = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "), result, "Should return: '" + result + "'");

// wave better
function waveBetter(str) {
  if (!str.length) return [];
  let words = [];
  str.split("").forEach((char, i) => {
    if (/[a-z]/.test(char)) {
      words.push(
        str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1)
      );
    }
  });
  return words;
}

let result2 = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(waveBetter("hello"), result2, "Should return: '" + result2 + "'");

result2 = [
  "Codewars",
  "cOdewars",
  "coDewars",
  "codEwars",
  "codeWars",
  "codewArs",
  "codewaRs",
  "codewarS",
];
console.log(
  waveBetter("codewars"),
  result2,
  "Should return: '" + result2 + "'"
);

result2 = [];
console.log(waveBetter(""), result2, "Should return: '" + result2 + "'");

result2 = [
  "Two words",
  "tWo words",
  "twO words",
  "two Words",
  "two wOrds",
  "two woRds",
  "two worDs",
  "two wordS",
];
console.log(
  waveBetter("two words"),
  result2,
  "Should return: '" + result2 + "'"
);

result2 = [" Gap ", " gAp ", " gaP "];
console.log(waveBetter(" gap "), result2, "Should return: '" + result2 + "'");

function removeRotten(bagOfFruits) {
  if (!bagOfFruits) return [];
  if (!bagOfFruits.length) return [];
  return bagOfFruits.map((f) => f.replace("rotten", "").toLowerCase());
}

console.log(removeRotten(["apple", "rottenBanana", "apple"]), [
  "apple",
  "banana",
  "kiwi",
  "melone",
  "orange",
]);
console.log(removeRotten([]), []);

function partlist(arr) {
  // your code
  let words = [];
  for (let i = 1; i < arr.length; i++) {
    let groups = [];
    groups.push(arr.slice(0, i).join(" "));
    groups.push(arr.slice(i).join(" "));
    words.push(groups);
  }
  return words;
}

// console.log(partlist(["I", "wish", "I", "hadn't", "come"]),
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
// console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
// [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])

console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), [
  ["vJQ", "anj mQDq sOZ"],
  ["vJQ anj", "mQDq sOZ"],
  ["vJQ anj mQDq", "sOZ"],
]);

function isNice(arr) {
  if (!arr.length) return false;

  return arr.every((n) => {
    console.log(n);
    let filtered = arr.filter((num) => num !== n);
    console.log(filtered);
    return filtered.some((b) => b + 1 == n || b - 1 == n);
  });
}

console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);

// function ranks(a) {
//   let copy = [...a];
//   const sorted = a.sort((n,b)=>b-n)
//     const data = sorted.reduce((acc, n)=> {
//       acc[n]=sorted.indexOf(n) +1
//       return acc;
//     },{})
//     return copy.map(n => data[n])
// }

// RECONTRA MEJORADO BIEN CHIDO BRO
// técnica usando una copia del mismo arreglo
// contra el mismo arreglo para ubicar sus índices bien cool
function ranks(a) {
  const x = a.slice().sort((a, b) => b - a);
  return a.map((n) => x.indexOf(n) + 1);
}

console.log(ranks([5, 2, 3, 5, 5, 4, 9, 8, 0]), [3, 8, 7, 3, 3, 6, 1, 2, 9]);

// total score / number of people
function outed(meet, boss) {
  //REcorrer arreglo
  const sum = Object.keys(meet).reduce(
    (total, m) => total + (m == boss ? meet[m] * 2 : meet[m]),
    0
  );
  const total = Object.keys(meet).length;
  return sum / total <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  ),
  "Get Out Now!"
);
console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 6,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    "katie"
  ),
  "Nice Work Champ!"
);
console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    "john"
  ),
  "Get Out Now!"
);

function spacify(str) {
  // return
  return str
    .split(" ")
    .map((l) => l.split(""))
    .map((l) => l.join(" "))
    .join("   ");
}
console.log(spacify("hello world"), "h e l l o   w o r l d");
console.log(spacify("12345"), "1 2 3 4 5");

function spacifyBetter(str) {
  return str.split("").join(" ");
}
console.log(spacifyBetter("hello world"), "h e l l o   w o r l d");
console.log(spacifyBetter("12345"), "1 2 3 4 5");

function grow(x) {
  return x.reduce((acc, n) => acc * n, 1);
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);

/* 
one or two ideas => Publish!
more than 2 good ideas => I smell a series!
no good ideas => Fail!

*/
function well(x) {
  const goods = x.filter((x) => x == "good");
  return !goods.length
    ? "Fail!"
    : goods.length <= 2
    ? "Publish!"
    : "I smell a series!";
}

console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
  "I smell a series!"
);

function flattenAndSort(array) {
  return array.flatMap((n) => n).sort((a, b) => a - b);
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
console.log(
  flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]),
  [1, 2, 3, 4, 5, 6, 100]
);

function reduceByRules(numbers, rules) {
  let copy = [...numbers];
  let result = 0;
  let limit = rules.length;
  for (let i = 0; i < numbers.length - 1; i++) {
    const chunk = copy.slice(0, 2);
    result = rules[Number(i % limit)](chunk[0], chunk[1]);
    copy = [result, ...copy.slice(2)];
  }

  return result;
}

const rules = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

console.log(reduceByRules([2.0, 2.0, 2.0], rules), 2.0);

console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 4.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 6.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 4.0);

// MEJORADO
function reduceByRulesBetter(numbers, rules) {
  return numbers.reduce((output, number, index) => {
    return rules[(index - 1) % rules.length](output, number);
  });
}

const rules2 = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

// console.log(reduceByRulesBetter([2.0, 2.0, 2.0], rules2), 2.0);

// console.log(reduceByRulesBetter([2.0, 2.0, 2.0, 2.0], rules2), 4.0);
console.log(reduceByRulesBetter([2.0, 2.0, 2.0, 2.0, 2.0], rules2), 6.0);
// console.log(reduceByRulesBetter([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules2), 4.0);

function duckShoot(ammo, aim, ducks) {
  const shots = Math.floor(ammo * aim);
  for (let i = 0; i < shots; i += 1) {
    ducks = ducks.replace("2", "X");
  }
  return ducks;
}

// console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'), '|~~X~~~X2~2~~22~2~~~~2~~~|');
// console.log(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|'), '|~~~~~~~X~2~~~|');
// console.log(duckShoot(6, 0.41, '|~~~~~22~2~~~~~|'), '|~~~~~XX~2~~~~~|');
console.log(duckShoot(10, 0.68, "|2~2~|"), "|~~~~~XX~2~~~~~|");

/*  
You are given a message (text) that you choose to read in a mirror (weirdo). 
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

*********
* olleH *
* dlroW *
*********
*/

function mirror2(text) {
  const max = Math.max(...text.split(" ").map((n) => n.length));
  const revert = text.split(" ").reduce((acc, w) => {
    const spaces = max - w.length;
    const blank = Array.from({ length: spaces }, (_, i) => i + 1).fill(
      " ",
      0,
      spaces
    );
    const content = [[...w].reverse().join(""), ...blank];
    acc.push(["*", " ", ...content, " ", "*"].join(""));
    return acc;
  }, []);
  const left = Array.from({ length: max + 4 }, (_, i) => i + 1)
    .fill("*", 0, max + 4)
    .join("");
  const right = Array.from({ length: max + 4 }, (_, i) => i + 1)
    .fill("*", 0, max + 4)
    .join("");
  return `${left}\n` + revert.join("\n") + `\n${right}`;
}
// console.log(mirror2('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
// console.log(mirror2('Codewars'), '************\n* srawedoC *\n************');
// console.log(mirror2('yrlejdyi iidj dyb'), '************\n* iydjelry *\n* jdii     *\n* byd      *\n************'
// );
console.log(
  mirror2('"ijtwhb odqua snpgda bxatr uqttqbct ewz"'),
  "************\n* bhwtji   *\n* auqdo    *\n* adgpns   *\n* rtaxb    *\n* tcbqttqu *\n* zwe      *\n************"
);

function mirror2Better(text) {
  let words = text.split(" ");
  const max = Math.max(...words.map((x) => x.length));

  words = words.map(
    (w) => "* " + [...w].reverse().join("") + " ".repeat(max - w.length) + " *"
  );
  return ["*".repeat(max + 4), ...words, "*".repeat(max + 4)].join("\n");
}
// console.log(mirror2('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
// console.log(mirror2('Codewars'), '************\n* srawedoC *\n************');
// console.log(mirror2('yrlejdyi iidj dyb'), '************\n* iydjelry *\n* jdii     *\n* byd      *\n************'
// );
console.log(
  mirror2Better('"ijtwhb odqua snpgda bxatr uqttqbct ewz"'),
  "************\n* bhwtji   *\n* auqdo    *\n* adgpns   *\n* rtaxb    *\n* tcbqttqu *\n* zwe      *\n************"
);

function productArray(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const filtered = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
    let total = filtered.reduce((acc, n) => acc * n);
    result.push(total);
  }
  return result;
}

// console.log(productArray([12,20]), [20,12]);
// console.log(productArray([12,20]), [20,12]);
// console.log(productArray([3,27,4,2]), [216,24,162,324]);
console.log(
  productArray([75, 10, 7, 7, 15, 6, 89, 2]),
  [
    7849800, 58873500, 84105000, 84105000, 39249000, 98122500, 6615000,
    294367500,
  ]
);
// console.log(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
// console.log(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);

/* 
Como los ejercicios de hallar el valor faltante de la suma de n numeros
pero con multiplicación, si de debe hallar el producto de n números excepto con un
ni número => se multiplica todo los números pero se retira el ni número, dividiendo ! 😃
*/
function productArrayBetter(numbers) {
  return numbers.map((n) => numbers.reduce((acc, l) => acc * l) / n);
}
console.log(
  productArrayBetter([75, 10, 7, 7, 15, 6, 89, 2]),
  [
    7849800, 58873500, 84105000, 84105000, 39249000, 98122500, 6615000,
    294367500,
  ]
);
