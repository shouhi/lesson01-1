const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];
const space = " ";
const mark = "*";
const result = {};
const array = [];

//studentsの中身を取り出し1の位を切り下げしていく
for (let i = 0; i < students.length; i++) {
  const num = Math.floor(students[i] / 10) * 10;
  //同じ値が出てきたときにカウントされていくようにする
  console.log(result[num]);
  if (result[num] === undefined) {
    // console.log(result);
    result[num] = 0;
  }
  result[num]++;
}
//resultに入っているプロパティの値を配列arrayに入れる
for (let a in result) {
  array.push(result[a]);
}

//arrayに入っている数字で最も大きい値を探す＝60の位の3が表示
const max = Math.max.apply(null, array);

//配列ansをmaxの数だけ生成する
for (let i = 0; i < max; i++) {
  let ans = [];

  //arrayに入っている数を一つずつ取り出してif文の条件に合うかを確認
  for (let a = 0; a < array.length; a++) {
    //arrayの値が{max(3)-(i=0/1/2)=3,2,1}に合えばmark(*)が入る
    if (array[a] >= max - i) {
      ans.push(mark);
      //入らなければspace(" ")が入る
    } else {
      ans.push(space);
    }
  }
  //各配列ansを確認し終えたら3つの配列ansを結びつける
  console.log(ans.join("  "));
}
console.log(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

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
