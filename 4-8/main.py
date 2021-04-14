strs = "こはるはるここはるここはるはるここはるこはるはるはる"


def countch(arg):
    count = 0
    for i in arg:
        count = count + 1
    return count


def main():
    target1 = 'こはる'
    target2 = 'はるこ'
    result1 = 0
    result2 = 0

    length1 = countch(target1)
    length2 = countch(target2)

    name = []
    base = []
    for i in strs:
        base.append(i)
        name = ''.join(base)
        namelength = countch(name)
        if namelength == length1 or namelength == length2:
            #print(name)
            if name == target1:
                result1 = result1 + 1
                # そろったらリセット
                name = []
            elif name == target2:
                result2 = result2 + 1
                # そろったらリセット
                name = []
            # 一文字ずらして次の確認へ
            base = base[1:]
            #print(base)

    print(target1, result1)
    print(target2, result2)


if __name__ == '__main__':
    main()
