/* /**
 *
 * {name: 'Jeremy', age: 24, role: 'Software Engineer'}
 * [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
 * */
function convertHashToArray(hash) {
  // return Object.keys(hash).sort((a,b)=>a.localeCompare(b)).reduce((acc,key)=>{
  //   acc.push([key,hash[key]])
  //   return acc;
  // },[])
  // best way
  return Object.entries(hash).sort();
}

console.log(convertHashToArray({ name: "Jeremy" }), [["name", "Jeremy"]]);
console.log(convertHashToArray({ name: "Jeremy", age: 24 }), [
  ["age", 24],
  ["name", "Jeremy"],
]);
console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }),
  [
    ["age", 24],
    ["name", "Jeremy"],
    ["role", "Software Engineer"],
  ]
);
console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }), [
  ["powerLevelOver", 9000],
  ["product", "CodeWars"],
]);
console.log(convertHashToArray({}), []);

function covfefe(str) {
  return !str.includes("coverage")
    ? `${str} covfefe`
    : str.replace(/coverage/g, "covfefe");
}

console.log(covfefe("coverage"), "covfefe");
console.log(covfefe("coverage coverage"), "covfefe covfefe");
console.log(covfefe("nothing"), "nothing covfefe");
console.log(covfefe("double space "), "double space  covfefe");
console.log(covfefe("covfefe"), "covfefe covfefe");
console.log(covfefe("erag"), "erag covfefe");

/* 
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
*/

function sortEmotions(arr, order) {
  const emotions = {
    ":D": 0,
    ":)": 1,
    ":|": 2,
    ":(": 3,
    T_T: 4,
  };
  if (!arr.length) return arr;
  return arr.sort((a, b) => {
    if (order) {
      return emotions[a] - emotions[b];
    } else {
      return emotions[b] - emotions[a];
    }
  });
}

console.log(sortEmotions([], false), []);
console.log(sortEmotions([], true), []);
console.log(sortEmotions([":D", "T_T", ":D", ":("], false), [
  "T_T",
  ":(",
  ":D",
  ":D",
]);
console.log(sortEmotions(["T_T", ":D", ":(", ":("], false), [
  "T_T",
  ":(",
  ":(",
  ":D",
]);
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], false), [
  "T_T",
  ":)",
  ":)",
  ":D",
  ":D",
]);

const citiesLis = [
  "nashville",
  "nashville",
  "los angeles",
  "nashville",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "canary islands",
  "barcelona",
  "madrid",
  "nashville",
  "barcelona",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid",
];

function countcount(arr) {
  const countCities = arr.reduce((acc, city) => {
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(countCities)
    .sort((a, b) => countCities[b] - countCities[a])
    .slice(0, 5);
  // return Object.entries(countCities).sort().slice(0,5)
}
console.log(countcount(citiesLis));

const repea = [1, 5, 3, 2];
function firstRepear(arr) {
  const data = {};
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (data[element]) {
      return element;
    }
    data[element] = true;
  }
  return -1;
}
console.log(firstRepear(repea));

const list = [
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 3,
    name: "Jane Doe",
  },
  {
    id: 3,
    phone: "+12223334444",
  },
];
// function prov(list) {
//   const res = list.filter((l,idx) => {
//     return list.findIndex(e => e.id == l.id) == idx
//   }).map((el,idx) => {
//     if(list.filter(e => e.id == el.id).length >=2) {
//       const merged = list.filter(e => e.id == el.id).reduce((acc,e) =>{
//         return  {
//           ...acc,
//           ...e
//         }
//       },{})
//       return merged
//     }
//     return el
//   })
//     return res
//   // let result = [];
//   // for (let index = 0; index < arr.length; index++) {
//   //   const element =  arr[index];
//   //   if(result.some(r => r.id == element.id)){
//   //       const elementIdx = result.findIndex(el => el.id == element.id);
//   //       const newElement = {
//   //         ...result[elementIdx],
//   //         ...element
//   //       }
//   //       result.splice(elementIdx,1,newElement)
//   //   } else {
//   //     result.push(element)
//   //   }
//   // }
//   // return result
// }
// console.log(prov(list));

const customers = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Richard Roe",
  },
];

const orders = [
  {
    id: 1,
    customerId: 1,
    product: "M1 MacBook Air",
    price: 999,
  },
  {
    id: 2,
    customerId: 2,
    product: "M1 MacBook Pro",
    price: 1299,
  },
  {
    id: 3,
    customerId: 1,
    product: "Dell XPS 9310",
    price: 1199,
  },
];
function denormalize({ primary, related, relatedName, referenceId }) {
  return primary.map((c) => ({
    ...c,
    [relatedName]: related.filter((r) => r[referenceId] == c.id),
  }));
}

console.log(
  denormalize({
    primary: customers,
    related: orders,
    relatedName: "orders",
    referenceId: "customerId",
  })
);

function add(...args) {
  if (args.length === 0) return 0;
  return args.reduce((acc, num, idx) => {
    acc += num / (idx + 1);
    return acc;
  }, 0);
}

console.log((add(), 0));
console.log(add(-192, -264, 34, 498, 437, -256, -209, 395, 252, -116, 319, 8));
// console.log((add(100, 200, 300), 300))
// console.log((add(2), 2))
// console.log((add(4, -3, -2), 2))
// console.log((add(-1, -2, -3, -4), -4))

function keepOrder(ary, val) {
  // your code here
  // const copy = [...ary,val].sort((a,b)=> a- b);
  // return copy.indexOf(val)

  // BETTER WAY
  return ary.filter((n) => n < val).length;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0), 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2), 2);
console.log(keepOrder([1, 2, 3, 4], 5), 4);
console.log(keepOrder([1, 2, 3, 4], -1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 0), 0);
console.log(keepOrder([1, 2, 3, 4], 1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 3), 2);
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);

function remove(string) {
  // const str = string.split(" ");
  // let result = [];
  // for (let index = 0; index < str.length; index+=1) {
  //   const element = str[index];
  //   if([...element].filter(l => l ==="!").length !== 1){
  //     result.push(element)
  //   }
  // }
  // return result.join(" ")
  return string
    .split(" ")
    .filter((w) => [...w].filter((l) => l === "!").length !== 1)
    .join(" ");
}

console.log(remove("Hi!"), "");
console.log(remove("Hi! Hi!"), "");
console.log(remove("Hi! Hi! Hi!"), "");
console.log(remove("Hi Hi! Hi!"), "Hi");
console.log(remove("Hi! !Hi Hi!"), "");
console.log(remove("Hi! Hi!! Hi!"), "Hi!!");
console.log(remove("Hi! !Hi! Hi!"), "!Hi!");
