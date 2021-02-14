const args = process.argv.slice(2);

const array = [];

let min = args[0];
let max = args[0];

for (let i = 1; i < args.length; i++) {
  //minとargsを一つずつ比べて最小値をminにする
  if (min > args[i]) {
    min = Number(args[i]);
    // 最大値をmaxにする
  } else if (max < args[i]) {
    max = Number(args[i]);
  }
}

for (let i = min; i <= max; i++) {
  for (let j = 0; j < args.length; j++) {
    if (i === Number(args[j])) {
      array.push(i);
    }
  }
}
console.log(array);
