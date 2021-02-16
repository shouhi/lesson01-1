const KOBE = require("./kobe.json");
const arr = [];

function printKobe(obj) {
  for (let key in obj) {
    const value = obj[key];
    if (key === "kobe") {
      arr.push(value);
    } else if (typeof value === "object") {
      printKobe(value);
    }
  }
}
printKobe(KOBE);
console.log(arr.join(""));
