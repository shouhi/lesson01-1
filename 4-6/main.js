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

const arg = process.argv["2"];

let times = arg.split(":");
times = times.map((time) => {
  return Number(time);
});
//console.log(times)
times[1] += 45;

times[1] = times[1] % 60;
times[0] += Math.floor(times[1] / 60);

//hour
console.log(times[0]);
//min
console.log(times[1]);
