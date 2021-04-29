// const SONGS = require("./songs.json");
// const PLAY_DATA = require("./playdata.json");
// const SONG_LIST = SONGS.songs;
// const DATA_LIST = PLAY_DATA.data;

// //DATA_LISTのcountを降順にする
// DATA_LIST.sort((a, b) => {
//   return b.count - a.count;
// });

// //DATA_LISTの中身をすべて取得する
// for (let i = 0; i < DATA_LIST.length; i++) {
//   let data = DATA_LIST[i];

//   //SONG_LISTのidとDATA_LISTのidを一致させる
//   const FOUND = SONG_LIST.find((song) => {
//     return song.id == data.id;
//   });

//   //出力のフォーマットに合わせるため定数に入れました。
//   const TITLE = FOUND.title;
//   const COUNT = data.count;

//   console.log(`${i + 1}位:${TITLE}\t${COUNT}`);
// }

// const playJson = require("./playdata.json");
// const songsJson = require("./songs.json");

// const playData = playJson.data;
// const songs = songsJson.songs;
// //console.log(JSON)

// //カウントの最大値、最小値を求める
// let countMax = Number(playData[0].count);
// let countMin = Number(playData[0].count);

// for (let i = 0; i < playData.length; i++) {
//   if (Number(playData[i].count) > countMax) {
//     countMax = Number(playData[i].count);
//   } else if (Number(playData[i].count) < countMin) {
//     countMin = Number(playData[i].count);
//   }
// }

// //playDataをカウントについて昇順に並べてsortedPlayDataにpush
// let sortedPlayData = [];
// for (let i = countMax; i >= countMin; i--) {
//   for (let j = 0; j < playData.length; j++) {
//     if (i === Number(playData[j].count)) {
//       sortedPlayData.push(playData[j]);
//     }
//   }
// }
// //console.log(sortedPlayData);

// //検索して表示

// for (let i = 0; i < sortedPlayData.length; i++) {
//   for (let j = 0; j < songs.length; j++) {
//     if (sortedPlayData[i].id === String(songs[j].id)) {
//       console.log(`[順位:${songs[j].title}\t${sortedPlayData[i].count}]`);
//     }
//   }
// }

// jsonファイルの読み込み
const fs = require("fs");
const jsonObject = JSON.parse(fs.readFileSync("playdata.json", "utf8"));
const result = {};
jsonObject.data.forEach((obj) => {
  result[obj.date] = obj;
});

const jsonObject_2 = JSON.parse(fs.readFileSync("songs.json", "utf8"));
const result_2 = {};
jsonObject_2.songs.forEach((obj) => {
  result_2[obj.date] = obj;
});

// 大きい順にソート
for (let i = 0; i < jsonObject.data.length - 1; i++) {
  for (let j = jsonObject.data.length - 1; j > i; j--) {
    if (
      Number(jsonObject.data[j].count) > Number(jsonObject.data[j - 1].count)
    ) {
      let tmp = jsonObject.data[j];
      jsonObject.data[j] = jsonObject.data[j - 1];
      jsonObject.data[j - 1] = tmp;
    }
  }
}

for (let j = 0; j < jsonObject.data.length; j++) {
  let get_id = Number(jsonObject.data[j].id);
  for (let k = 0; k < jsonObject_2.songs.length; k++) {
    if (get_id == jsonObject_2.songs[k].id) {
      console.log(
        `順位:${jsonObject_2.songs[k].title}\t${jsonObject.data[j].count}`
      );
    }
  }
}
