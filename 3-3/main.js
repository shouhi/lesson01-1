/**コマンドライン引数で受け取った、段数のピラミッドを形成する**

入力例 
```
node main.js 4
```


出力例
```
   *              *            
  ***            **             *
 *****     →    ***     ＋      **
*******        ****             ***
```
(7(一番下の個数)- 2*n段目-1) / 2= スペースの数
*/

// const a = Number(process.argv[2]);
// const b = Number(process.argv[3]);
// console.log(a + b);

// const vertical = Number(process.argv[2]);

// const ICON = "*";
// const SPASE = " ";

// for (let v = 1; v <= vertical; v++) {
//   // console.log(`${v}回目`);
//   let count = vertical - v; //真ん中で割った左側の個数
//   let ans = SPASE.repeat(count) + ICON.repeat(v) + ICON.repeat(v - 1);

//   console.log(ans);
// }

const arg1 = process.argv[2];
let mark = "*";
let brank = " ";

for (let i = 1; i <= arg1; i++) {
  let arr = [];
  for (let k = 0; k < arg1 - i; k++) {
    arr.push(brank);
  }
  for (let j = 0; j < i * 2 - 1; j++) {
    arr.push(mark);
  }
  console.log(arr.join(""));
}
