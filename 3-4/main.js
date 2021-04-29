// const arg1 = process.argv[2];
// const arg2 = process.argv[3];

// reverse_a_number = (n) => {
//   return n.split("").reverse().join("");
// };
// const sum = Number(reverse_a_number(arg1)) + Number(reverse_a_number(arg2));

// console.log(sum);

// console.log;
// function square(number) {
//   return 3.14 * number * number;
// }

// const arr = [];
// arr.push(arg1);

// console.log(String(arr).split(""));

const arg1 = process.argv[2];
const arg2 = process.argv[3];
// var array1 = [];
// var array2 = [];

reverse_a_number = (n) => {
  const array1 = [];
  let arraySplit1 = n.split("");
  for (let i = 0; i < arraySplit1.length; i++) {
    array1.unshift(arraySplit1[i]);
  }
  return array1.join("");
};
console.log(Number(reverse_a_number(arg1)));
console.log(Number(reverse_a_number(arg2)));
// let arraySplit1 = arg1.split("");
// for (let i = 0; i < arraySplit1.length; i++) {
//   array1.unshift(arraySplit1[i]);
// }
// const bind1 = array1.join("");

// let arraySplit2 = arg2.split("");
// for (let j = 0; j < arraySplit2.length; j++) {
//   array2.unshift(arraySplit2[j]);
// }
// const bind2 = array2.join("");

console.log(Number(reverse_a_number(arg1)) + Number(reverse_a_number(arg2)));
