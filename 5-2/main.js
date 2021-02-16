//jsonファイルを読み込む
const JSON = require("./users.json");

//json.usersをusersに置き換える
const users = JSON.users;

const A_MONEY = 3000;
const A_MONEYPLUS = 100000;
const A_MONEYPLUS2 = 120000;

const B_MONEY = 4000;
const B_MONEYPLUS = 140000;

const C_MONEY = 5000;
const C_MONEYPLUS = 160000;

for (let i = 0; i < users.length; i++) {
  //ランクがAの場合とそれ以外の場合に分ける
  if (users[i].rank == "A") {
    //Aの場合で勤続年数(years)が5未満の場合
    if (users[i].years < 5) {
      users[i]["salary"] = A_MONEY * users[i].years + A_MONEYPLUS;
    } else {
      //Aだけど勤続年数が5未満じゃない時
      users[i]["salary"] = A_MONEY * users[i].years + A_MONEYPLUS2;
    }
  } else {
    if (users[i].rank == "B") {
      //ランクがBの場合
      users[i]["salary"] = B_MONEY * users[i].years + B_MONEYPLUS;
    } else {
      //そうでない(ランクがC)の場合
      users[i]["salary"] = C_MONEY * users[i].years + C_MONEYPLUS;
    }
  }

  //salaryのところでsortして降順にする(大->小)
  users.sort(function (a, b) {
    return b.salary - a.salary;
  });
}

//usersオブジェクトをすべて受け取りnameとsalaryだけを表示する
for (let j = 0; j < users.length; j++) {
  console.log(`${users[j].name}:${users[j].salary}`);
}
