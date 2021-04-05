import numpy as np


point = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
list1 = [1, 2, 3]
for index in range(len(point)):
    print(point[index])

def calc():
    # 各分布の数を調べる
    num0 = 0
    num10 = 0
    num20 = 0
    num30 = 0
    num40 = 0
    num50 = 0
    num60 = 0
    num70 = 0
    num80 = 0
    num90 = 0
    num100 = 0
    for i in point:
        if 0<=i<=9:
            num0 = num0+1
        elif 10<=i<=19:
            num10 = num10+1
        elif 20<=i<=29:
            num20 = num20+1
        elif 30<=i<=39:
            num30 = num30+1
        elif 40<=i<=49:
            num40 = num40+1
        elif 50<=i<=59:
            num50 = num50+1
        elif 60<=i<=69:
            num60 = num60+1
        elif 70<=i<=79:
            num70 = num70+1
        elif 80<=i<=89:
            num80 = num80+1
        elif 90<=i<=99:
            num90 = num90+1
        elif 100==i:
            num100 = num100+1
        else:
            print('error')

    numAll = [num0,num10,num20,num30,num40,num50,num60,num70,num80,num90,num100]
    numAll = np.array(numAll)

    # 最も大きなカウントから分布図の高さを決める
    nummax = max(numAll)

    # 分布図の表示
    result = []
    for j in range(nummax):
        # まずは１番下の１列を作る
        line = np.where(0<numAll, '* ', '  ')
        #print(*line)
        result.append(line)

        # カウントが0以下になると空欄になる仕掛け
        numAll = numAll-1

    # 上下が逆さまなので反転
    result = result[::-1]
    # 目盛りを表示
    result.append([' ----------------------------------'])
    result.append([' 0 10 20 30 40 50 60 70 80 90 100'])
    for results in result:
        print(*results)


if __name__ == '__main__':
    calc()