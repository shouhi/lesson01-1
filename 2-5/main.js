const arg1 = Number(process.argv[2]);
//100の値を算出
const hundredyen = Math.floor(arg1 / 100);
//100で割って余った値を１０の値で算出
const tenyen = Math.floor((arg1 % 100) / 10);
//10で割って余った残りの値を1の値で算出
const yen = arg1 % 10;

console.log(`100円玉${hundredyen}枚10円玉${tenyen}枚1円玉${yen}枚`);

// let n = Number(process.argv[2]);
// let coin = 100;
// let text = "";
// while (coin >= 1) {
//   let a = Math.floor(n / coin);
//   text += coin + "円玉" + a + "枚";
//   if (coin > 1) {
//     text += ", ";
//   }
//   n -= coin * a;
//   coin /= 10;
// }
// console.log(text);

const arga = process.argv[2];

const hundred = Math.floor(arga / 100);
const ten = Math.floor((arga % 100) / 10);
const one = Math.floor(arga % 10);
//Math.floor()関数は数値以下の最大の整数を返す
//小数点は表示されない

console.log(`100円玉${hundred}枚、10円玉${ten}枚、1円玉${one}`);
//`${定数名}`のことをテンプレート構文という
