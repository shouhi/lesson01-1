const arg1 = process.argv[2].toLowerCase();
const arg2 = process.argv[3].toLowerCase();
const arr = [];

const array = arg1.split(",");

for (let i = 0; i < array.length; i++) {
  if (array[i].includes(arg2)) {
    arr.push(array[i]);
  }
}

arr.sort();
console.log(arr);
