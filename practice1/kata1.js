/* 
Given a string, turn each character into its ASCII 
character code and join them together 
to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 
7 with the number 1, and call this number 'total2':
total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference 
between the sum of the digits in total1 and total2:
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                      6
*/

function calc(x) {
  const total1 = [...x].map((l) => l.charCodeAt()).join("");
  const total2 = [...total1].map((n) => (n == "7" ? "1" : n)).join("");

  return (
    [...total1].reduce((a, b) => a + +b, 0) -
    [...total2].reduce((a, b) => a + +b, 0)
  );
}

console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

/* SEGUNDA VERSIÓN SEGÚN FEEDBACK */
function calcBetter(x) {
  const total1 = x.replace(/./g, (x) => x.charCodeAt());
  const total2 = total1.replace(/7/g, "1");
  return (
    [...total1].reduce((a, b) => +a + +b, 0) -
    [...total2].reduce((a, b) => +a + +b, 0)
  );
}
console.log(calcBetter("abcde"));

/* 
You will be given an array of objects (associative arrays in PHP, table in COBOL) 
representing data about developers who have signed up to attend the next
coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL)
which includes the count of each coding language represented at the meetup.
*/

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

function countLanguages(list) {
  let total = {};
  list.forEach((e) => {
    console.log(e.language);
    total[e.language] = (total[e.language] || 0) + 1;
  });
  return total;
}

console.log(countLanguages(list1));

/* 
You will be given an array of objects representing data about developers who have 
signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options 
selected by the developers on the meetup sign-up form..

For example, given the following input array:
*/

const list2 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

function orderFood(list) {
  let foods = {};
  list.forEach((m) => {
    foods[m.meal] = (foods[m.meal] || 0) + 1;
  });
  return foods;
}
console.log(orderFood(list2));

// modo dos

function orderFoodBetter(list) {
  return list.reduce((acc, d) => {
    acc[d.meal] = (acc[d.meal] || 0) + 1;
    return acc;
  }, {});
}
console.log(orderFoodBetter(list2));

/* 
var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply
by subtracting age from the current year. Please make sure that your function delivers the correct 
birth year irrespective of when it will be executed, for example it should also 
work correctly for a meetup organised in 10-years-time. The example above assumes
that the function is run in year 2020.
*/

const listnames = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];
function addUsername(list) {
  return list.map((e) => ({
    ...e,
    username:
      e.firstName.toLowerCase() +
      e.lastName[0].toLowerCase() +
      String(new Date().getFullYear() - e.age),
  }));
}
console.log(addUsername(listnames));
