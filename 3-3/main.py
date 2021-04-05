import sys
# import numpy as np


def main():
    a = int(sys.argv[1])
    # 底に並ぶ個数を計算
    aa = 2*a-1

    result = []

    for i in range(1, a+1):
        # アスタリスクの個数を計算
        an = 2*i-1
        # 片側のスペースの個数を計算
        bn = int((aa-an)/2)

        # 片側のスペースを個数分並べる
        base1 = [' ']*bn
        # アスタリスクを個数分並べる
        base2 = ['*']*an

        # アスタリスクをスペースで挟む
        line = base1+base2+base1
        result.append([line])

        # print(result)

    # 表示を整える
    for results in result:
      # print(*results)
        for resultss in results:
            print(*resultss)


if __name__ == '__main__':
    main()