# import sys


# def main():
#     args = sys.argv[1]
#     print(args)

#     names = []
#     base = []
#     # 一文字ずつ判別する
#     for i in args:
#         # 名前ごとに一つの要素にまとめる
#         if i != ',':
#             base.append(i)
#             name = ''.join(base)
#             name = str.lower(name)
#         # カンマが来たら要素を追加
#         elif i == ',':
#             names.append(name)
#             base = []
#     names.append(name)  # 最後のnameも忘れずに追加

#     result = sorted(names)
#     print(*result)


# if __name__ == '__main__':
#     main()

a , b = map(str,input().split())
c = a.split(",")
d = []
for i in range(len(c)):
    d.append(c[i].lower())
e =len(d)
f =[]
for i in range(e):
    co = d[i].count(b)
    if co > 0:
        f.append(d[i])
    else:
        continue
f_sorted = sorted(f)
print(*f_sorted)