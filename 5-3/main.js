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
