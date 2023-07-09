function betweenExtremes(numbers) {
  //write your code here
  // const sorted = numbers.sort((a, b) => a - b);

  // return sorted[numbers.length - 1] - sorted[0];

  // THE EASIEST WAY
  return Math.max(...numbers) - Math.min(...numbers);
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes([-1, -41, -77, -100]), 99);

const entrada = "aaaaaab";
function removedora(s) {
  let i = 0;
  let j = 0;

  // Intilize an empty string for new elements.
  let new_elements = "";

  // Iterate String Using j pointer.
  while (j < s.length) {
    // If both elements are same then skip.
    if (s[i] == s[j]) {
      console.log("🚀 ~ file: kata17.js:26 ~ removedora ~ s[i]:", s[i]);
      console.log("🚀 ~ file: kata17.js:26 ~ removedora ~ s[j]:", s[j]);
      j++;
      // If both elements are not same then append new element.
    } else if (s[j] != s[i] || j == s.length - 1) {
      new_elements += s[i];
      // After appending sliding over the window.
      i = j;
      j++;
    }
  }
  // Append the last string.
  new_elements += s[j - 1];
  return new_elements;
}
console.log(removedora(entrada));
