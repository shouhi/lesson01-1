// function swap(array, index1, index2) {
//   //ランダムの数字で生成される2つの値からなる配列array2を生成する
//   //array2の2つの値が重ならないようにarray[index2]に別のindex1を代入する

//   let array2 = [array[index2], (array[index2] = array[index1])];

//   //array(ary)の配列のindex1をarray2の配列0番目と入れ替える

//   array[index1] = array2[0];
// }

// let ary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// //rand.rand2の値を変えながらswap(2箇所)入れ替える処理を10回行う
// for (let i = 1; i < 10; i++) {
//   //関数に渡している引数2のindex1を0~9のランダムの数で生成
//   let rand = Math.floor(Math.random() * 9);

//   let rand2 = Math.floor(Math.random() * 9);

//   swap(ary, rand, rand2);
// }

// console.log(ary);

// 　function getRandomInt(max) {
// return Math.floor(Math.random() * max);
// }
// let ramdomNumbers = [];

// ramdomNumbers.push(getRandomInt(10));

// const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numbers = NUMBERS.slice();
// let changedNumbers = [];
// for (let i = 0; i < NUMBERS.length; i++) {
//   const r = Math.floor(Math.random() * numbers.length); //
//   changedNumbers.push(numbers[r]);
//   numbers.splice(r, 1);
// }

// console.log(changedNumbers);

const num = 10;
var array = [];

// for (let i = 0; i < 10; i++) {
// for (let j = 0; j < ; j++) {
// const element = array[j];
// if (array[i]) {

// }
while (array.length < 10) {
  let random = Math.floor(Math.random() * num);
  if (!array.includes(" " + random)) {
    array.push(" " + random);
  }
}
var result = array.join("");
console.log(result);
