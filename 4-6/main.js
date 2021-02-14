const args = process.argv[2];

const array = args.split(":");

const hour = Number(array[0]);
const min = Number(array[1]);

if (min + 45 < 60) {
  console.log(`${hour}\n${min + 45}`);
} else {
  let Newhour = hour + 1;
  if (Newhour === 24) {
    console.log(`0\n${min + 45 - 60}`);
  } else {
    console.log(`${Newhour}\n${min + 45 - 60}`);
  }
}
