const arg1 = Number(process.argv[2]);

switch (arg1) {
  case 2:
  case 3:
  case 4:
    console.log("春です");
    break;
  case 5:
  case 6:
  case 7:
    console.log("夏です");
    break;
  case 8:
  case 9:
  case 10:
    console.log("秋です");
    break;
  case 11:
  case 12:
  case 1:
    console.log("冬です");
    break;
  default:
    console.log("エラー");
    break;
}
