const arg1 = process.argv[2];
const arg2 = process.argv[3];

reverse_a_number = (n) => {
  return n.split("").reverse().join("");
};
const sum = Number(reverse_a_number(arg1)) + Number(reverse_a_number(arg2));

console.log(sum);

// console.log;
// function square(number) {
//   return 3.14 * number * number;
// }

// const arr = [];
// arr.push(arg1);

// console.log(String(arr).split(""));
