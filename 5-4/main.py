import json

strs = open('./kobe.json', 'r' ,encoding="utf-8_sig")
strs_dict = json.load(strs)

ans = []
def searchKobe(DICT):
    # 基本は現在のkeyに対応するvalue(辞書型)で再帰
    for i in (DICT):
        if i == 'kobe':
            ans.append(DICT[i])
            # kobeを見つけたらDICTの持つkeyをリストに格納し、kobeの次にくるkeyで再帰
            nextKeytoKobe = []
            for j in DICT.keys():
                nextKeytoKobe.append(j)
            try:
                return searchKobe(DICT[nextKeytoKobe[1]])
            except:
                pass  # IndexError: list index out of range を回避したい
        elif i != 'kobe':
            return searchKobe(DICT[i])

searchKobe(strs_dict)
print(*ans)