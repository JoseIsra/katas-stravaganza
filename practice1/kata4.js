/* 

In this kata, you will be given an array.
Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more 
than one empty room in some test cases).
'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/

const meetings = ["X", "O", "X"];

function meeting(x) {
  return x.every((room) => room == "X")
    ? "None available!"
    : x.findIndex((room) => room == "O");
}
console.log(meeting(meetings));

/* 
nstead of copying the original, it reverses it: '1' becomes '
0' and vice versa.

Given a string of binary,
return the version the photocopier 
gives you as a string.
*/

const codes = "1110101001010101";

function broken(x) {
  return x
    .split("")
    .map((n) => (n == "1" ? "0" : "1"))
    .join("")
    .toString();
}

console.log(broken(codes));

/* 
It is recorded as a systolic pressure over a diastolic pressure 
(for example '120/80 mmHg') which represent the maximum and minimum 
pressure in the vessels between heartbeats.

Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg

You are given a list, patients, in which each element represents a patient. 
Each patient/element consists of a list of strings (representing all measurements 
of a patient's blood pressure) in the format "s/d", where s is the systolic pressure 
and d the diastolic, both in mmHg. Systolic and diastolic numbers will always be 
whole numbers.

Return the number of patents that meet any of the above hypertension definitions.
[
["130/90","140/94"],
["160/110"],
["200/120"],
["150/94","140/90","120/90"],
["140/94","140/90","120/80","130/84"]
]

Output:
3
 */

const pressures = [
  ["130/90", "140/94"],
  ["160/110"],
  ["200/120"],
  ["150/94", "140/90", "120/90"],
  ["140/94", "140/90", "120/80", "130/84"],
];
let hypertensive = function (patients) {
  // minimun 2 to average
  let patient = 0;
  let averageS = 0;
  let averageD = 0;
  patients.forEach((p) => {
    averageS = 0;
    averageD = 0;

    if (p.length >= 2) {
      console.log(p);
      p.forEach((pre) => {
        const [s, d] = pre.split("/");
        console.log(s);
        averageS += s;
        averageD += d;
        if (averageS / p.length >= 140) {
          patient += 1;
          averageS = 0;
        }
        if (averageD / p.length >= 90) {
          patient += 1;
          averageD = 0;
        }
      });
    } else {
      console.log(p);
      const [s, d] = p[0].split("/");
      if (s >= 180 && d >= 110) patient += 1;
      console.log(patient);
    }
  });
  return patient;
};

console.log(hypertensive(pressures));
const a = ["a", "f"];
