// // let people = { firstName = "name",}

// let inputA = Kournikova Anna F F 6-3-1975 Red
// Hingis Martina M F 4-2-1979 Green
// Seles Monica H F 12-2-1973 Black
const inputA =
  "Kournikova Anna F F 6-3-1975 Red Hingis Martina M F 4-2-1979 Green Seles Monica H F 12-2-1973 Black";

const inputB =
  "Abercrombie, Neil, Male, Tan, 2/13/1943 Bishop, Timothy, Male, Yellow, 4/23/1967 Kelly, Sue, Female, Pink, 7/12/1959";

const inputC =
  "Smith | Steve | D | M | Red | 3-3-1985 Bonk | Radek | S | M | Green | 6-3-1975 Bouillon | Francis | G | M | Blue | 6-3-1975";

function removeDelimiter(string) {
  //remove the delimiters
  return string.replace(/[,\|]/g, "");
}

// console.log(removeDelimiter(inputC))
// console.log(removeDelimiter(inputB))

// transform raw data into individual entries "people/person"
let groupA = inputA.split(" ")

console.log(groupA.slice(0,6))
console.log(groupA.slice(7,12))
console.log(groupA.slice(13))



userA = {
  firstName: "name",
  lastName: "last",
  middleInitial: "mid",
  dob: Date,
  gender: "m",
  color: "red",
};

// var stringWithCommas = 'a,b,c,d';
// var stringWithoutCommas = stringWithCommas.replace(/,/g, '');
// console.log(stringWithoutCommas);

// console.log(inputC.replace(/\|/g, ''));
