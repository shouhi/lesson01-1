// //[if文 条件分岐]

// // const num = 10;
// // if (num === 10) {
// //   console.log("正解");
// // } else {
// //   console.log("不正解");
// // }

// //考え方

// // const test1 = process.argv[0];
// // const test2 = process.argv[1];
// // const test3 = process.argv[2];
// // const test4 = process.argv[3];

// const argv = process.argv.splice(2);
// console.log(argv[0]);
// // console.log(argv);

// // console.log(test1);
// // console.log(test2);
// // console.log(test3);
// // console.log(test4);
// const vertical = Number(process.argv[2]);
// const horizon = Number(process.argv[3]);
// const ICON_1 = "*";
// const ICOM_2 = "-";

// for (let v = 0; v < vertical; v++) {
//   let word = "";
//   for (let h = 0; h < horizon; h++) {
//     //verticalが偶数かどうかを判別する
//     if (v % 2 === 0) {
//       //verticalが偶数のとき
//       h % 2 === 0 ? (word += ICON_1) : (word += ICOM_2);
//     } else {
//       h % 2 === 0 ? (word += ICOM_2) : (word += ICON_1);
//     }
//   }
//   console.log(word);
// }

// const arg1 = process.argv[2];
// const arg2 = process.argv[3];
// const mark = "*";
// const dash = "-";

// for (let i = 0; i < arg1; i++) {
//   let arr = [];
//   if (i % 2 == 0) {
//     for (let j = 0; j < arg2; j++) {
//       let odd = j % 2 == 1 ? dash : mark;
//       arr.push(odd);
//     }
//   } else {
//     for (let j = 0; j < arg2; j++) {
//       let even = j % 2 == 1 ? mark : dash;
//       arr.push(even);
//     }
//   }
//   console.log(arr.join(""));
// }

// **コマンドライン引数の1つ目を縦、2つ目を横の数とし"\*-"が連続した四角形を作る。
// ルール：奇数行は、"\*"から始まるが、偶数行は"-"から始める。**
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
for (let n = 1; n <= a; n++) {
  let wei = "";
  if (n % 2 == 0) {
    for (let m = 1; m <= b; m++) {
      if (m % 2 == 0) {
        wei += "*";
      } else {
        wei += "-";
      }
    }
  } else {
    for (let m = 1; m <= b; m++) {
      if (m % 2 == 0) {
        wei += "-";
      } else {
        wei += "*";
      }
    }
  }
  console.log(wei);
}
