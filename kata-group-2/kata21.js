// write the function isAnagram
function isAnagram(test, original) {
  // MY OWN WAY
  // let temp = [...(original.toLowerCase())];
  // const arr =  [...(test.toLowerCase())]
  // if (test.length !== original.length) return false;
  // for (let index = 0; index < arr.length; index+=1) {
  //   const letter = arr[index];
  //   const idx = temp.indexOf(letter);
  //   if (idx > -1) temp.splice(idx, 1)
  // }
  // return temp.length === 0

  // THE MOST EASIEST WAY
  const t = [...test.toLowerCase()].sort().join("");
  const o = [...original.toLowerCase()].sort().join("");
  return t === o;
}

console.log(
  isAnagram("foefet", "toffee"),
  true,
  'The word "foefet" is an anagram of "toffee"'
);
console.log(
  isAnagram("Buckethead", "DeathCubeK"),
  true,
  'The word "Buckethead" is an anagram of "DeathCubeK"'
);
console.log(
  isAnagram("Twoo", "WooT"),
  true,
  'The word "Twoo" is an anagram of "WooT"'
);
console.log(
  isAnagram("dumble", "bumble"),
  false,
  'Characters do not match for test case "dumble", "bumble"'
);
console.log(
  isAnagram("ound", "round"),
  false,
  'Missing characters for test case "ound", "round"'
);
console.log(
  isAnagram("apple", "pale"),
  false,
  "Same letters, but different count"
);
console.log(isAnagram("aCjIkatBtDIyWxYgdJW", "tDCIxaBaYytJdjWIkfg"), false);

function solve(s) {
  // MY OWN
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // const consonants =s.replace(/[aeiou]/gi, ' ').split(' ').filter(l => l);
  // const values = consonants.map(c => {
  //   const letters = c.split('').reduce((acc, l) => acc + (alphabet.indexOf(l) + 1), 0);
  //   return letters
  // });
  // return Math.max(...values);

  // ANOTHER COOL WAY
  // NO OLVIDAR QUE PODEMOS USAR POSICIONES
  // DEL ALFABETO SIN USAR UN DICCIONARIO CREADO COMO ABCDEF...
  // PODEMOS USAR EL "a".charCodeAt() - 96 para obtener la posición
  // no olivdar eso, es conocimiento general carnal
  const consonants = s.split(/[aeiou]/g);
  const values = consonants.map((c) => {
    return [...c].reduce((acc, l) => acc + l.charCodeAt() - 96, 0);
  });
  return Math.max(...values);
}

console.log(solve("zodiacs"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);
console.log(solve("twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);

function rotate(str) {
  // MY OWN WAY

  // let rotated = '';
  // const rotates = [];
  // for (let i = 0; i < [...str].length; i+=1) {
  //   const letter = [...str].slice(0, i+1).join('');
  //   rotated = [...str].slice(i+1).join('') + letter
  //   rotates.push(rotated)
  // }
  // return rotates;
  // ANOTHER WAY
  let s = str;
  const rotates = [];
  for (let i = 0; i < s.length; i += 1) {
    s = s.slice(1) + s[0];
    rotates.push(s);
  }
  return rotates;
}

console.log(rotate("Hello"), ["elloH", "lloHe", "loHel", "oHell", "Hello"]);
