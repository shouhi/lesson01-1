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

const arga = process.argv[2];

const pyramid = "*";
const space = " ";

for (i = 1; i <= arga; i++) {
  //ピラミッドの段数の式を作る
  //条件式の最初の数値(今回はi)が、0か1かは重要なのでよく考える！大体は0から始めるらしい。

  let count = arga - i;
  //repeatをどのように繰り返すか設定する

  console.log(space.repeat(count) + pyramid.repeat(i) + pyramid.repeat(i - 1));
  //repeat(繰り返す回数)なので、
  //speace.repeat(count)は、argaが5でfor文が1巡目の場合、speace" "を5-1=4入れることになる
  //for文が3巡目の場合、" "は2つ入ることになる
}
