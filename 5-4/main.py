# import json

# strs = open('./kobe.json', 'r' ,encoding="utf-8_sig")
# strs_dict = json.load(strs)

# ans = []
# def searchKobe(DICT):
#     # 基本は現在のkeyに対応するvalue(辞書型)で再帰
#     for i in (DICT):
#         if i == 'kobe':
#             ans.append(DICT[i])
#             # kobeを見つけたらDICTの持つkeyをリストに格納し、kobeの次にくるkeyで再帰
#             nextKeytoKobe = []
#             for j in DICT.keys():
#                 nextKeytoKobe.append(j)
#             try:
#                 return searchKobe(DICT[nextKeytoKobe[1]])
#             except:
#                 pass  # IndexError: list index out of range を回避したい
#         elif i != 'kobe':
#             return searchKobe(DICT[i])

# searchKobe(strs_dict)
# print(*ans)


import json

json_open = open('kobe.json', 'r')
kobe = json.load(json_open)
t = list(kobe)
length1 = len(t)
next_key =kobe.get(t[length1-1])
try:
    for i in range(1,146):
        f = list(next_key)
        if f[0] == "kobe" and i !=144:
            s =list(next_key.values())
            print(s[0])
            length1 = len(f)
            next_key =next_key.get(f[length1-1])
        elif i ==145:
            print(f[0])
            length1 = len(f)
            next_key =next_key.get(f[length1-1])
        else:
            length1 = len(f)
            next_key =next_key.get(f[length1-1])
            continue
except AttributeError:
    exit()