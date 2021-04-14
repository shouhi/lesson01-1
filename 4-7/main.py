import sys


def main():
    args = sys.argv[1]
    print(args)

    names = []
    base = []
    # 一文字ずつ判別する
    for i in args:
        # 名前ごとに一つの要素にまとめる
        if i != ',':
            base.append(i)
            name = ''.join(base)
            name = str.lower(name)
        # カンマが来たら要素を追加
        elif i == ',':
            names.append(name)
            base = []
    names.append(name)  # 最後のnameも忘れずに追加

    result = sorted(names)
    print(*result)


if __name__ == '__main__':
    main()