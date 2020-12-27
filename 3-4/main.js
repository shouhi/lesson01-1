const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
const sum = Number(reverse_a_number(arg1)) + Number(reverse_a_number(arg2));

console.log(sum);
