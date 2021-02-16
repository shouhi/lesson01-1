const STR = "こはるはるここはるここはるはるここはるこはるはるはる";
const ARR = [];
const ARG = "こはる";
const ARG2 = "はるこ";
const LIMIT = ARG.length;
let kcount = 0;
let hcount = 0;

for (let i = 0; i < STR.length; i++) {
  // スタート地点としてwordに入れる
  let word = STR[i];
  //調べたい文字数分だけ取得
  for (j = 1; j < LIMIT; j++) {
    //   (iが１増えるごとに)jを1~2増やすので取得する文字数は常に3文字
    word += STR[i + j];
  }
  // wordがARG(こはる)であればkcountを足す
  if (word == ARG) {
    kcount++;
    // wordがARG(はるこ)であればhcountを足す
  } else if (word == ARG2) {
    hcount++;
  }
}
console.log(`こはる:${kcount}\nはるこ:${hcount}`);
