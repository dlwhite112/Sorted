const inputA =
  "Kournikova Anna F F 6-3-1975 Red Hingis Martina M F 4-2-1979 Green Seles Monica H F 12-2-1973 Black";

const inputB =
  "Abercrombie, Neil, Male, Tan, 2/13/1943 Bishop, Timothy, Male, Yellow, 4/23/1967 Kelly, Sue, Female, Pink, 7/12/1959";

const inputC =
  "Smith | Steve | D | M | Red | 3-3-1985 Bonk | Radek | S | M | Green | 6-3-1975 Bouillon | Francis | G | M | Blue | 6-3-1975";

// function to remove the delimiters
function removeDelimiter(string) {
  // return string.replace(/[,\|]/g, "");
  return string.replace(/[\|][ ]|,/g, "");
}

// transform raw data into individual entries "people/person"
let groupA = inputA.split(" ");
// split the groupA into individual persons
let person1 = groupA.slice(0, 6);
let person2 = groupA.slice(6, 12);
let person3 = groupA.slice(12);

// Run inputB through the removeDelimiter function to get it into the same format as inputA

let noCommas = removeDelimiter(inputB);

let groupB = noCommas.split(" ");
// split the groupB into individual persons
let person4 = groupB.slice(0, 5);
let person5 = groupB.slice(5, 10);
let person6 = groupB.slice(10);

let noBars = removeDelimiter(inputC);

let groupC = noBars.split(" ");
// split the groupC into individual persons
let person7 = groupC.slice(0, 6);
let person8 = groupC.slice(6, 12);
let person9 = groupC.slice(12);

// combine all all persons into one People object
let people = [
  {
    firstName: person1[1],
    lastName: person1[0],
    middleInitial: person1[2],
    dob: person1[4],
    gender: person1[3],
    color: person1[5],
  },
  {
    firstName: person2[1],
    lastName: person2[0],
    middleInitial: person2[2],
    dob: person2[4],
    gender: person2[3],
    color: person2[5],
  },
  {
    firstName: person3[1],
    lastName: person3[0],
    middleInitial: person3[2],
    dob: person3[4],
    gender: person3[3],
    color: person3[5],
  },
  {
    firstName: person4[1],
    lastName: person4[0],
    middleInitial: null,
    dob: person4[4],
    gender: person4[2][0],
    color: person4[3],
  },
  {
    firstName: person5[1],
    lastName: person5[0],
    middleInitial: null,
    dob: person5[4],
    gender: person5[2][0],
    color: person5[3],
  },
  {
    firstName: person6[1],
    lastName: person6[0],
    middleInitial: null,
    dob: person6[4],
    gender: person6[2][0],
    color: person6[3],
  },
  {
    firstName: person7[1],
    lastName: person7[0],
    middleInitial: person7[2],
    dob: person7[5],
    gender: person7[3],
    color: person7[4],
  },
  {
    firstName: person8[1],
    lastName: person8[0],
    middleInitial: person8[2],
    dob: person8[5],
    gender: person8[3],
    color: person8[4],
  },
  {
    firstName: person9[1],
    lastName: person9[0],
    middleInitial: person9[2],
    dob: person9[5],
    gender: person9[3],
    color: person9[4],
  },
];

console.log(people);

