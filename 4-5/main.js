// const args = process.argv.slice(2);

// const array = [];

// let min = args[0];
// let max = args[0];

// for (let i = 1; i < args.length; i++) {
//   //minとargsを一つずつ比べて最小値をminにする
//   if (min > args[i]) {
//     min = Number(args[i]);
//     // 最大値をmaxにする
//   } else if (max < args[i]) {
//     max = Number(args[i]);
//   }
// }

// for (let i = min; i <= max; i++) {
//   for (let j = 0; j < args.length; j++) {
//     if (i === Number(args[j])) {
//       array.push(i);
//     }
//   }
// }
// console.log(array);

const args = process.argv.slice(2);

let sortedNumbers = [];

let min = args[0];
let max = args[0];
//最小値と最大値を決める
for (let i = 0; i < args.length; i++) {
  if (min > args[i]) {
    min = args[i];
  } else if (max < args[i]) {
    max = args[i];
  }
}

// console.log(`max${max},min${min}`);

//最小値から最大値までループして、同じ値があればpushする
for (let i = min; i <= max; i++) {
  console.log(min);
  console.log(max);
  for (let j = 0; j < args.length; j++) {
    if (Number(i) === Number(args[j])) {
      sortedNumbers.push(i);
    }
  }
}
console.log(sortedNumbers);
