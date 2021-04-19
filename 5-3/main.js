const SONGS = require("./songs.json");
const PLAY_DATA = require("./playdata.json");
const SONG_LIST = SONGS.songs;
const DATA_LIST = PLAY_DATA.data;

//DATA_LISTのcountを降順にする
DATA_LIST.sort((a, b) => {
  return b.count - a.count;
});

//DATA_LISTの中身をすべて取得する
for (let i = 0; i < DATA_LIST.length; i++) {
  let data = DATA_LIST[i];

  //SONG_LISTのidとDATA_LISTのidを一致させる
  const FOUND = SONG_LIST.find((song) => {
    return song.id == data.id;
  });

  //出力のフォーマットに合わせるため定数に入れました。
  const TITLE = FOUND.title;
  const COUNT = data.count;

  console.log(`${i + 1}位:${TITLE}\t${COUNT}`);
}

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
