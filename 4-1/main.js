//空の配列arrayに引数で渡す数字をpushする
const array = [];
for (let i = 2; i < process.argv.length; i++) {
  array.push(Number(process.argv[i]));
}
array.sort(function (a, b) {
  return b - a;
});

//5つの引数と決まっているので中間値の値はindex2番目である
console.log(array[2]);

//----------------------------------------------------------
// 引数に渡す個数がランダムの場合

//中間値のindexを求める
const num = Math.floor(array.length / 2);

//引数に渡した数が奇数の場合
if (array.length % 2 === 1) {
  console.log(array[num]);
  //引数に渡した数が偶数の場合
} else {
  console.log((array[num] + array[num - 1]) / 2);
}
