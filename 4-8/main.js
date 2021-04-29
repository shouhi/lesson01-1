// const STR = "こはるはるここはるここはるはるここはるこはるはるはる";
// const ARR = [];
// const ARG = "こはる";
// const ARG2 = "はるこ";
// const LIMIT = ARG.length;
// let kcount = 0;
// let hcount = 0;

// for (let i = 0; i < STR.length; i++) {
//   // スタート地点としてwordに入れる
//   let word = STR[i];
//   //調べたい文字数分だけ取得
//   for (j = 1; j < LIMIT; j++) {
//     //   (iが１増えるごとに)jを1~2増やすので取得する文字数は常に3文字
//     word += STR[i + j];
//   }
//   // wordがARG(こはる)であればkcountを足す
//   if (word == ARG) {
//     kcount++;
//     // wordがARG(はるこ)であればhcountを足す
//   } else if (word == ARG2) {
//     hcount++;
//   }
// }
// console.log(`こはる:${kcount}\nはるこ:${hcount}`);

// const str = "こはるはるここはるここはるはるここはるこはるはるはる";
// let hCount = 0;
// let kCount = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] + str[i + 1] + str[i + 2] === "はるこ") {
//     hCount += 1;
//   } else if (str[i] + str[i + 1] + str[i + 2] === "こはる") {
//     kCount += 1;
//   }
// }

// console.log(`こはる:${kCount}`);
// console.log(`はるこ:${hCount}`);

// const str = "こはるはるここはるここはるはるここはるこはるはるはる";
// const search_word_1 = "こはる";
// const search_word_2 = "はるこ";

// // strを配列に追加
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   arr.push(str[i]);
// }
// console.log(arr);

// // 前から3文字ずつ取得し、配列に追加
// let found_arr = [];
// for (let j = 0; j < arr.length - 2; j++) {
//   let combo = arr.slice(j, j + 3);
//   console.log(combo);
//   combo = combo[0] + combo[1] + combo[2];
//   found_arr.push(combo);
// }

// // 値を探し、カウント
// function found(text) {
//   let count = 0;
//   for (let k = 0; k < found_arr.length; k++) {
//     let result = found_arr[k].includes(text);
//     if (result == true) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(`${search_word_1}:${found(search_word_1)}`);
// console.log(`${search_word_2}:${found(search_word_2)}`);

const str = "こはるはるここはるここはるはるここはるこはるはるはる";
const str2 = "こはる";
const str3 = "はるこ";
let countk = Number([]);
let counth = Number([]);
for (let i = 0; i < str.length; i++) {
  if (str[i] + str[i + 1] + str[i + 2] === str2) {
    countk += 1;
  }
  if (str[i] + str[i + 1] + str[i + 2] === str3) {
    counth += 1;
  }
}
console.log(`こはる:${countk}`);
console.log(`はるこ:${counth}`);
