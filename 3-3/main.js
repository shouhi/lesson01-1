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
*/

const vertical = Number(process.argv[2]);

const ICON = "*";
const SPASE = " ";

for (let v = 1; v <= vertical; v++) {
  let count = vertical - v; //真ん中で割った左側の個数
  let ans = SPASE.repeat(count) + ICON.repeat(v) + ICON.repeat(v - 1);

  console.log(ans);
}
