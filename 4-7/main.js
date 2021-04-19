const arg1 = process.argv[2].toLowerCase();
const arg2 = process.argv[3].toLowerCase();
const arr = [];

const array = arg1.split(",");

for (let i = 0; i < array.length; i++) {
  if (array[i].includes(arg2)) {
    arr.push(array[i]);
  }
}

arr.sort();
console.log(arr);

// const arg1 = process.argv["2"];
// const arg2 = process.argv["3"];
// const strings = arg1.split(",").map((string) => {
//   return string.toLowerCase();
// });
// const searchingWord = arg2;
// //console.log(strings);
// let result = [];
// // const result = strings.map((string) => { if(string.indexOf(searchingWord) != -1){
// //     return string;
// // }else{
// //     return false;
// // }});
// for (let i = 0; i < strings.length; i++) {
//   //console.log(strings[i].indexOf(searchingWord));
//   if (strings[i].indexOf(searchingWord) > -1) {
//     result.push(strings[i]);
//   }
// }

// const sResult = result.join(" ");

// console.log(sResult);
