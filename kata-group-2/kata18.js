/* 
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
,
["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

return ["name1", "name3"];
*/

const array = [
  ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 120, ["B", "A", "A", "A"]],
  ["name3", 160, ["B", "A", "A", "A", "A"]],
  ["name4", 140, ["B", "A", "A", "C", "A"]],
];

function findHack(arr) {
  const points = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  const results = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    const totalPoints = element[2].reduce(
      (acc, l) => acc + (points[l] || 0),
      0
    );
    const needExtraPoints =
      element[2].length >= 5 && element[2].every((p) => p === "B" || p == "A");
    const finalTotalPoints = needExtraPoints ? totalPoints + 20 : totalPoints;
    if (finalTotalPoints !== element[1] || element[1] > 200) {
      results.push(element[0]);
    }
  }
  return results;
}

console.log(findHack(array), ["name2", "name4"]);

function missingWord(nums, str) {
  const message = str.split(" ").join("").toLowerCase();
  if (nums.some((n) => n > message.length)) return "No mission today";
  return nums
    .sort((a, b) => a - b)
    .map((n) => message[n])
    .join("");
}

console.log(missingWord([5, 0, 3], "I love you"), "ivy");
console.log(
  missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"),
  "bay"
);
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today");

function bingo(ticket, win) {
  let miniWins = 0;
  for (let i = 0; i < ticket.length; i += 1) {
    const element = ticket[i];
    const code = element[0];
    const num = element[1];
    if ([...code].some((c) => c.charCodeAt(0) == num)) {
      miniWins += 1;
    }
  }
  return miniWins >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  ),
  "Loser!"
);
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  ),
  "Winner!"
);
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  ),
  "Loser!"
);

const solution = (mtrx) => {
  // code here
  const arrowPlace = mtrx.findIndex((m) => m.includes(">"));
  const row = mtrx[arrowPlace];
  return row.indexOf(">") < row.indexOf("x");
};

console.log(
  solution([
    [">", " "],
    [" ", "x"],
  ]),
  false
);

console.log(
  solution([
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", ">", " ", "x"],
    [" ", " ", "", " ", " "],
  ]),
  true
);

function order(words) {
  if (!words.length) return "";
  return words.split(" ").sort((a, b) => {
    return (
      +[...a].filter((n) => Number(n))[0] - +[...b].filter((n) => Number(n))[0]
    );
  });
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
console.log(order(""), "", "empty input should return empty string");

function allNonConsecutive(arr) {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    const prevNum = arr[index - 1];
    if (prevNum && element - prevNum !== 1) {
      result.push({
        i: index,
        n: element,
      });
    }
  }
  return result;
}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]), [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
]);

function numberOfPairs(gloves) {
  const totalPairs = gloves.reduce((acc, glove) => {
    acc[glove] = (acc[glove] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(totalPairs).reduce((acc, pair) => {
    if (totalPairs[pair] >= 2) {
      acc += Math.floor(totalPairs[pair] / 2);
    }
    return acc;
  }, 0);
}

// console.log(numberOfPairs(['red','red']),1);
// console.log(numberOfPairs(['red','green','blue']),0);
console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"]),
  3
);
console.log(
  numberOfPairs([
    "Lime",
    "Maroon",
    "Maroon",
    "White",
    "Gray",
    "Fuchsia",
    "Aqua",
    "Red",
    "White",
    "Blue",
    "Maroon",
    "Gray",
    "Gray",
    "Navy",
    "Aqua",
    "Green",
    "White",
    "Yellow",
    "Purple",
    "Green",
    "Olive",
    "White",
    "Black",
    "Aqua",
    "Maroon",
    "Teal",
    "Silver",
    "Silver",
    "Maroon",
    "Maroon",
    "White",
    "Teal",
    "Gray",
    "Purple",
    "Silver",
    "Navy",
    "Lime",
    "Maroon",
    "Navy",
    "Maroon",
    "Black",
    "Black",
    "Purple",
    "Green",
    "Lime",
    "Navy",
    "Purple",
    "Black",
    "Black",
    "Yellow",
    "Fuchsia",
    "Teal",
    "Black",
    "Teal",
    "Green",
    "Navy",
    "Teal",
    "Olive",
    "Fuchsia",
    "Fuchsia",
    "Maroon",
    "Yellow",
    "Purple",
    "Aqua",
    "Navy",
    "Maroon",
    "Lime",
    "Purple",
    "White",
    "Gray",
    "Teal",
    "Teal",
    "Yellow",
    "Teal",
    "White",
    "Yellow",
    "Teal",
    "Purple",
    "Green",
    "Blue",
    "Fuchsia",
    "Blue",
    "Maroon",
    "Navy",
    "Olive",
    "Blue",
    "Aqua",
    "White",
    "Maroon",
    "Blue",
    "White",
    "Fuchsia",
    "Lime",
    "Teal",
    "Gray",
    "Maroon",
    "Olive",
    "White",
  ])
);
