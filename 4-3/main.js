const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00",
];

for (let i = 0; i < errorLogs.length; i++) {
  //errorLogosのstartpointを決める
  const startPoint = errorLogs[i].indexOf(":");

  //errorLogosのendpointを決める
  const endPoint = errorLogs[i].indexOf(" -");

  //startpointに1足したインデックス番号からendpointまでの間を抜き出す
  const result = errorLogs[i].substring(startPoint + 1, endPoint);
  console.log(result);
}
