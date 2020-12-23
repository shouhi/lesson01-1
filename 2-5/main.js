const arg1 = Number(process.argv[2]);
//100の値を算出
const hundredyen = Math.floor(arg1 / 100);
//100で割って余った値を１０の値で算出
const tenyen = Math.floor((arg1 % 100) / 10);
//10で割って余った残りの値を1の値で算出
const yen = arg1 % 10;

console.log(`100円玉${hundredyen}枚10円玉${tenyen}枚1円玉${yen}枚`);
