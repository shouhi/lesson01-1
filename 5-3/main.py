import json

# encoding="utf-8_sig" の指定をしないとerrorが出た(Windows10環境)
# UnicodeDecodeError: 'cp932' codec can't decode byte 0x84 in position 74: illegal multibyte sequence
data = open('./playdata.json', 'r' ,encoding="utf-8_sig")
data_dict = json.load(data)['data']

songs = open('./songs.json', 'r' ,encoding="utf-8_sig")
songs_dict = json.load(songs)['songs']

# count降順へ並べ替え
sorted_data_dict = sorted(data_dict, key=lambda x:int(x['count']), reverse=True)

# リストに格納しなおす
songID = []
count = []
for i in sorted_data_dict:
    songID.append(i['id'])
    count.append(i['count'])

# idが一致した楽曲のタイトルをリストに格納する
titles = []
for i in range(len(songID)):
    for j in songs_dict:
        if str(j['id']) == str(songID[i]):
            titles.append(j['title'])

# 結果を表示
for i in range(len(songID)):
    print(str(i+1)+'位:'+titles[i]+'\t'+count[i])