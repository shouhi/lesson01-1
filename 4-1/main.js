// //空の配列arrayに引数で渡す数字をpushする
// const array = [];
// for (let i = 2; i < process.argv.length; i++) {
//   array.push(Number(process.argv[i]));
// }
// array.sort(function (a, b) {
//   return b - a;
// });

// //5つの引数と決まっているので中間値の値はindex2番目である
// console.log(array[2]);

// //----------------------------------------------------------
// // 引数に渡す個数がランダムの場合

// //中間値のindexを求める
// const num = Math.floor(array.length / 2);

// //引数に渡した数が奇数の場合
// if (array.length % 2 === 1) {
//   console.log(array[num]);
//   //引数に渡した数が偶数の場合
// } else {
//   console.log((array[num] + array[num - 1]) / 2);
// }

// // let args = process.argv.slice(2);
// //コマンドライン引数の先頭から要素を２つ削除したい
// //数値化して並び替え
// // const nums = args.map(Number).sort();
// // console.log(`sort:${nums}`);
// // target = Math.floor(nums.length / 2);

// // if (nums.length % 2 === 1) {
// //   console.log(nums);
// //   console.log(nums[target]);
// // } else {
// //   console.log(nums);
// //   console.log((nums[target] + nums[target - 1]) / 2);
// // }

// let args = [
//   Number(process.argv["2"]),
//   Number(process.argv["3"]),
//   Number(process.argv["4"]),
//   Number(process.argv["5"]),
//   Number(process.argv["6"]),
// ];

// args.sort((a, b) => a - b);

// console.log(args[2]);

const arg1 = process.argv[2];
const arg2 = process.argv[3];
const arg3 = process.argv[4];
const arg4 = process.argv[5];
const arg5 = process.argv[6];
var array = [arg1, arg2, arg3, arg4, arg5];
function compareFunc(a, b) {
  return a - b;
}
array.sort(compareFunc);
console.log(array[2]);
