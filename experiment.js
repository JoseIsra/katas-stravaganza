// A PRUEBA TÉCNICA PARA REMOVER LETRAS CONTINUAS

const removeOneLetter = (str) => {
  const letters = [...str];
  const result = [];
  for (let i = 0; i < letters.length; i += 1) {
    const letter = letters[i];
    if (result[result.length - 1] !== letter) {
      result.push(letter);
    }
  }
  return result.join("");
};

function removeAllConsecutives(s) {
  const parsedLetters = [];
  for (let index = 0; index < s.length; index += 1) {
    const stri = s[index];
    parsedLetters.push(removeOneLetter(stri));
  }
  return parsedLetters.join("\n");
}
const input = ["aaaab", "abababa", "aabbcb"];

console.log(removeAllConsecutives(input));
