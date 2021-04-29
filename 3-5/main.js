// const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];
// const space = " ";
// const mark = "*";
// const result = {};
// const array = [];

// //studentsの中身を取り出し1の位を切り下げしていく
// for (let i = 0; i < students.length; i++) {
//   const num = Math.floor(students[i] / 10) * 10;
//   //同じ値が出てきたときにカウントされていくようにする
//   // console.log(result[num]);
//   if (result[num] === undefined) {
//     // console.log(result);
//     result[num] = 0;
//   }
//   result[num]++;
// }
// console.log(result);
// //resultに入っているプロパティの値を配列arrayに入れる
// for (let a in result) {
//   array.push(result[a]);
// }
// console.log(array);
// //arrayに入っている数字で最も大きい値を探す＝60の位の3が表示
// const max = Math.max.apply(null, array);

// //配列ansをmaxの数だけ生成する
// for (let i = 0; i < max; i++) {
//   let ans = [];

//   //arrayに入っている数を一つずつ取り出してif文の条件に合うかを確認
//   for (let a = 0; a < array.length; a++) {
//     //arrayの値が{max(3)-(i=0/1/2)=3,2,1}に合えばmark(*)が入る
//     if (array[a] >= max - i) {
//       ans.push(mark);
//       //入らなければspace(" ")が入る
//     } else {
//       ans.push(space);
//     }
//   }
//各配列ansを確認し終えたら3つの配列ansを結びつける
// console.log(ans.join("  "));
// }
// console.log(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];
// const width = 10;
// var max_s = Math.max(...students);
// var ls_len = students.length;
// const floors = parseInt(max_s / width, 10);
// //グラフ化
// var data = Array(floors).fill(0);
// var result = [];
// var num;
// const base = Array(floors).fill(" ");
// console.log(floors);
// var max_d = 0;
// for (var i = 0; i < ls_len; i++) {
//   num = parseInt(students[i] / width, 10) - 1;
//   data[num] += 1;
//   if (data[num] > max_d) {
//     // result.unshift(Array(floors).fill(" "));
//     result.unshift([...base]); //=>うまくいかない why?
//     max_d += 1;
//   }
//   result[max_d - data[num]][num] = "*";
// }
// //出力
// for (var i = 0; i < max_d; i++) {
//   console.log("  " + result[i].join("  "));
// }
// console.log("-".repeat(3 * floors));
// console.log(
//   Array(floors + 1)
//     .fill(" ")
//     .map((x, y) => width * y)
//     .join(" ")
// );

// let arr_count = [];
// let count = [];
// const mark = "*";
// const brank = " ";
// const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];
// for (let j = 0; j < students.length; j++) {
//   let get_score = Math.floor(students[j] / 10);
//   arr_count.push(get_score);
//   arr_count = arr_count.sort(function (a, b) {
//     return a - b;
//   });
// }

// for (let k = 0; k < arr_count.length; k++) {
//   let num = arr_count[k];
//   count[num] = (count[num] || 0) + 1;
// }

// // 配列を3つ作る
// let arr_3 = [];
// let arr_2 = [];
// let arr_1 = [];

// for (let m = 0; m < count.length; m++) {
//   let number = count[m];
//   if (number >= 3) {
//     arr_1.push(mark);
//     arr_2.push(mark);
//     arr_3.push(mark);
//   } else if (number >= 2) {
//     arr_1.push(mark);
//     arr_2.push(mark);
//     arr_3.push(brank);
//   } else if (number >= 1) {
//     arr_1.push(mark);
//     arr_2.push(brank);
//     arr_3.push(brank);
//   } else {
//     arr_1.push(brank);
//     arr_2.push(brank);
//     arr_3.push(brank);
//   }
// }
// console.log(arr_3.join("  "));
// console.log(arr_2.join("  "));
// console.log(arr_1.join("  "));

// // 0から100
// let arr = ["0"];
// let score = 0;
// for (let i = 0; i < 10; i++) {
//   score = score + 10;
//   arr.push(String(score));
// }
// console.log("---------------------------------");
// console.log(arr.join(" "));

const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];
var array1 = []; //切り捨てした後の数値格納
var array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; //度数
var array3 = []; //回数格納用
var array4 = []; //最後の空白と※をいれる
let sum = 0;

for (let i = 0; i < students.length; i++) {
  const num = Math.floor(students[i] / 10) * 10;
  array1.push(num);
}

// array1 = [ 10, 30, 100, 90, 20, 60, 70, 40, 60, 80, 80, 50, 40, 30, 60 ]
for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] === array2[i]) {
      sum++;
    }
  }
  array3.push(sum);
  sum = 0;
}

// array3 = [ 1, 1, 2, 2, 1, 3, 1, 2, 1, 1 ]
const max = Math.max(...array3);
for (let z = 0; z < max; z++) {
  for (let x = 0; x < array3.length; x++) {
    if (array3[x] >= max - z) {
      array4.push(" * ");
    } else {
      array4.push("   ");
    }
  }
  var result = array4.join("");
  console.log(result);
  array4.length = 0;
}
console.log("---------------------------------------");
console.log("10 20 30 40 50 60 70 80 90 100");
