// const arg1 = process.argv[2];
// console.log(arg1 % 24);

const n = process.argv[2];

if (n > 24) {
  console.log(`${n - Math.floor(n / 24) * 24}`);
} else {
  console.log(`${n}`);
}
