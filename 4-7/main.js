// const arg1 = process.argv[2].toLowerCase();
// const arg2 = process.argv[3].toLowerCase();
// const arr = [];

// const array = arg1.split(",");

// for (let i = 0; i < array.length; i++) {
//   if (array[i].includes(arg2)) {
//     arr.push(array[i]);
//   }
// }

// arr.sort();
// console.log(arr);

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

// const arg1 = process.argv[2];
// const arg2 = String(process.argv[3]);
// let arr = [];

// // 引数を配列に変換
// const name = arg1.split(",");

// // 引数が含まれるか
// for (let i=0; i<name.length; i++) {
//   let result = name[i];
//   const reg = new RegExp(".*" + arg2 + ".*", "i");
//   const found = result.match(reg);
//   if (found != null) {
//     arr.push(found);
//   }
// }

// console.log(arr);

// // 小文字に変換
// const newArray = arr.map(function (value) {
//   return String(value).toLowerCase();
// });

// // アルファベット順に並び替え
// console.log(newArray.sort().join(" "));

var array = [];
var sub = [];
var Newarray = [];

for (let i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}

const sprit = array[0].split(",");

for (let i = 0; i < sprit.length; i++) {
  const inv = sprit[i].toLowerCase().indexOf(array[1]);
  if (inv !== -1) {
    Newarray.push(sprit[i]);
  }
}
const result = Newarray.join();
console.log(result);
