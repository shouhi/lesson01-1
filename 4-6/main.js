// const args = process.argv[2];

// const array = args.split(":");

// const hour = Number(array[0]);
// const min = Number(array[1]);

// if (min + 45 < 60) {
//   console.log(`${hour}\n${min + 45}`);
// } else {
//   let Newhour = hour + 1;
//   if (Newhour === 24) {
//     console.log(`0\n${min + 45 - 60}`);
//   } else {
//     console.log(`${Newhour}\n${min + 45 - 60}`);
//   }
// }

// const arg = process.argv["2"];

// let times = arg.split(":");
// times = times.map((time) => {
//   return Number(time);
// });
// //console.log(times)
// times[1] += 45;

// if (times[1] >= 60) {
//   times[0] += Math.floor(times[1] / 60);
//   times[1] %= 60;
//   if (times[0] >= 24) {
//     times[0] %= 24;
//   }
// }

// //hour
// console.log(times[0]);
// //min
// console.log(times[1]);

// const arg = process.argv[2];

// const times = arg.split(":");
// const minutes = Number(times[1]) + 45;

// if (minutes >= 60 && times[0] == 23) {
//   console.log("0");
//   console.log(String(minutes - 60));
// } else if (minutes <= 60) {
//   console.log(times[0]);
//   console.log(String(minutes));
// } else {
//   console.log(String(Number(times[0]) + 1));
//   console.log(String(minutes - 60));
// }

const arg = process.argv[2];
const sprit = arg.split(":");

for (let i = 0; i < sprit.length; i++) {
  sprit[i] = Number(sprit[i]);
}
sprit[1] = sprit[1] + 45;
if (sprit[1] >= 60) {
  sprit[1] = sprit[1] - 60;
  sprit[0] = sprit[0] + 1;
}
sprit[0] = sprit[0] % 24;
console.log(sprit[0]);
console.log(sprit[1]);
