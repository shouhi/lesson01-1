const vertical = Number(process.argv[2]);

const ICON = "*";
const SPASE = " ";

for (let v = 1; v <= vertical; v++) {
  let count = vertical - v;
  let ans = SPASE.repeat(count) + ICON.repeat(v) + ICON.repeat(v - 1);

  console.log(ans);
}
