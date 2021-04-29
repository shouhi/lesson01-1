// //jsonファイルを読み込む
// const JSON = require("./users.json");

// //json.usersをusersに置き換える
// const users = JSON.users;

// const A_MONEY = 3000;
// const A_MONEYPLUS = 100000;
// const A_MONEYPLUS2 = 120000;

// const B_MONEY = 4000;
// const B_MONEYPLUS = 140000;

// const C_MONEY = 5000;
// const C_MONEYPLUS = 160000;

// for (let i = 0; i < users.length; i++) {
//   //ランクがAの場合とそれ以外の場合に分ける
//   if (users[i].rank == "A") {
//     //Aの場合で勤続年数(years)が5未満の場合
//     if (users[i].years < 5) {
//       users[i]["salary"] = A_MONEY * users[i].years + A_MONEYPLUS;
//     } else {
//       //Aだけど勤続年数が5未満じゃない時
//       users[i]["salary"] = A_MONEY * users[i].years + A_MONEYPLUS2;
//     }
//   } else {
//     if (users[i].rank == "B") {
//       //ランクがBの場合
//       users[i]["salary"] = B_MONEY * users[i].years + B_MONEYPLUS;
//     } else {
//       //そうでない(ランクがC)の場合
//       users[i]["salary"] = C_MONEY * users[i].years + C_MONEYPLUS;
//     }
//   }

//   //salaryのところでsortして降順にする(大->小)
//   users.sort(function (a, b) {
//     return b.salary - a.salary;
//   });
// }

// //usersオブジェクトをすべて受け取りnameとsalaryだけを表示する
// for (let j = 0; j < users.length; j++) {
//   console.log(`${users[j].name}:${users[j].salary}`);
// }

// const JSON = require("./users.json");
// //console.log(JSON);

// let aUsersNameAndIncome = [];
// //JSONのデータを元に収入計算sてaUsersNameAndIncomeにArray内にオブジェクト型で記載
// JSON.users.forEach((user) => {
//   let income = 0;
//   let userNameAndIncome = {};
//   switch (user.rank) {
//     case "A":
//       if (user.years >= 5) {
//         income = 3000 * user.years + 120000;
//       } else {
//         income = 3000 * user.years + 100000;
//       }
//       break;
//     case "B":
//       income = 4000 * user.years + 140000;
//       break;
//     case "C":
//       income = 5000 * user.years + 160000;
//       break;
//     default:
//       console.log("error");
//   }
//   userNameAndIncome["name"] = user.name;
//   userNameAndIncome["income"] = income;
//   aUsersNameAndIncome.push(userNameAndIncome);
// });

// //console.log(aUsersNameAndIncome);

// // | ランク(rank)|勤続年数|給与|
// // |----|----|----|
// // | A|5年未満|3000x勤続年数+100,000 |
// // | A|5年以上|3000x勤続年数+120,000 |
// // | B|-|4000x勤続年数+140,000 |
// // | C|-|5000x勤続年数+160,000 |

// let incomeMax = aUsersNameAndIncome[0].income;
// let incomeMin = aUsersNameAndIncome[0].income;
// //収入の最大値と最小値を求める
// for (let i = 0; i < aUsersNameAndIncome.length; i++) {
//   if (incomeMax < aUsersNameAndIncome[i].income) {
//     incomeMax = aUsersNameAndIncome[i].income;
//   } else if (incomeMin > aUsersNameAndIncome[i].income) {
//     incomeMin = aUsersNameAndIncome[i].income;
//   }
// }

// //incomeMaxからincomeMinまでループさせて、incomeが同じであれば出力する

// for (let i = incomeMax; i >= incomeMin; i--) {
//   for (let j = 0; j < aUsersNameAndIncome.length; j++) {
//     if (i === aUsersNameAndIncome[j].income) {
//       console.log(
//         `${aUsersNameAndIncome[j].name}:${aUsersNameAndIncome[j].income}`
//       );
//     }
//   }
// }

// $.getJSON(users.json, (data) => {
//   // console.log(data);
//  }
// income
// const fs = require("fs");

// const jsonObject = JSON.parse(fs.readFileSync("./users.json", "utf8"));
// const result = [];

// jsonObject.users.forEach((obj) => {
//   const case1 = 3000 * obj.years + 100000;
//   const case2 = 3000 * obj.years + 120000;
//   const case3 = 4000 * obj.years + 140000;
//   const case4 = 5000 * obj.years + 160000;
//   if (obj.rank === "A" && obj.years < 5) {
//     obj["income"] = case1;
//     // obj.push(income case1)
//   } else if (obj.rank === "A" && !obj.years < 5) {
//     obj["income"] = case2;
//     // obj.push(case2);
//   } else if (obj.rank === "B") {
//     obj["income"] = case3;
//     // obj.push(case3);
//   } else {
//     obj["income"] = case4;
//     // obj.push(case4);
//   }
//   // console.log(obj);
//   result.push(obj);

//   // console.log(obj.income);
// });

// for (let i = 0; i < result.length; i++) {
//   // console.log(result[i].income);

//   result.sort(function (a, b) {
//     return a.income < b.income ? 1 : -1;
//   });

//   console.log(result[i]);
// }

const fs = require("fs");
const jsonObject = JSON.parse(fs.readFileSync("users.json", "utf8"));
const result = {};

jsonObject.users.forEach((obj) => {
  result[obj.date] = obj;
  // 「給与」をjsonデータに追加
  // メンバーの給与を計算
  obj.rank == "A" && obj.years < 5
    ? (obj.salary = 3000 * obj.years + 100000)
    : obj.rank == "A" && obj.years >= 5
    ? (obj.salary = 3000 * obj.years + 120000)
    : obj.rank == "B"
    ? (obj.salary = 4000 * obj.years + 140000)
    : (obj.salary = 5000 * obj.years + 160000);
});

for (let i = 0; i < jsonObject.users.length - 1; i++) {
  for (let j = jsonObject.users.length - 1; j > i; j--) {
    if (jsonObject.users[j].salary > jsonObject.users[j - 1].salary) {
      let tmp = jsonObject.users[j];
      jsonObject.users[j] = jsonObject.users[j - 1];
      jsonObject.users[j - 1] = tmp;
    }
  }
}
for (let k = 0; k < jsonObject.users.length; k++) {
  console.log(jsonObject.users[k].name + ":" + jsonObject.users[k].salary);
}
