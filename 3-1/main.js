// 3/8(月) 第二回勉強会[変数・定数・配列・for文を学ぼう]

/** 
Q, 変数とは？
A, データを保存しておくための箱。
*/

/**
   Q, どうやって変数を宣言するのか？
   A, const 定数名= 初期値;
      let 変数名= 初期値;

      ex)
      const arg = process.argv[2];
      let apple = red;

      変数名の始まりは英文字の小文字/_/$
  */

/**
    constの特徴
    再代入できない、再定義できない

    const num = 100;
    num = 200; ⇢❌

    const num = 200; ⇢❌

  */

/**
    letの特徴
    再代入できる、再定義できない

    let num = 100;
    num = 200; ⇢⭕

    let num = 200; ⇢❌
  */

/**
   Q,配列とは？
   A,連番が付けられた変数の集合体

   ex)let a = 1;
      let arr = [1,3,5]
*/

/**
   Q, どうやって配列を宣言するのか？
   A, const 定数名= [];
      let 変数名= [];

      ex)
      const arr = [];
      let arr = [];
*/

/**
  配列の特徴
  []の中にある要素は0~数字で取得できる

  ex) const prof = ["井手","Tech.Uni","関西学院大学","商学部"]
      console.log("名前:"+prof[0]) ,,, 名前：井手
      console.log(prof[1]) ,,, Tech.Uni
*/

// // ①配列を9用意する
// for (let i = 1; i < 10; i++) {
//   const row = [];
//   row.push(i);
//   // for (let a = 1; a < 10; a++) {
//   //   row.push(i * a);
//   // }
//   // console.log(row.join("\t"));
//   // console.log(row);
// }

// // ②9個の配列に数字を入れる
// for (let i = 1; i < 10; i++) {
//   const row2 = [];
//   row2.push(i);
//   // console.log(row2);
// }

// // ③掛け算のプログラムを組んでいく
// for (let i = 1; i < 10; i++) {
//   // console.log(i);
//   const row3 = [];
//   for (let j = 1; j < 10; j++) {
//     console.log(j);
//     // row3.push(i * j);
//   }
//   // console.log(row3);
// }

// // ④九九表っぽく表示する
// for (let i = 1; i < 10; i++) {
//   const row4 = [];
//   for (let j = 1; j < 10; j++) {
//     row4.push(i * j);
//   }
//   console.log(row4.join("\t"));
// }

// for (let i = 1; i < 10; i++) {
//   let arr = "";
//   for (let j = 1; j < 10; j++) {
//     arr += i * j;
//     arr += " ";
//   }
//   console.log(arr);
// }

let n = "";
for (let i = 0; i < 5; i++) {
  n += i;
}
console.log(n);
