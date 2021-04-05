import sys
# import numpy as np


def main():
  a = sys.argv[1]
  b = sys.argv[2]
  def rev_string_list(n):
    num1 = []
    for i in n:
        # １文字ずつ配列に格納
        num1.append(i)
        # 配列を反転
        renum1 = num1[::-1]
        result1 = ''.join(renum1)
    return result1

  print(int(rev_string_list(a)) + int(rev_string_list(b)))
    # # 入力は文字列扱い
    # a = sys.argv[1]
    # b = sys.argv[2]
    # num1 = []
    # num2 = []
    # for i in a:
    #     # １文字ずつ配列に格納
    #     num1.append(i)
    #     # 配列を反転
    #     renum1 = num1[::-1]
    # # 配列の形を崩す
    # result1 = ''.join(renum1)
    # # 数値へ変換
    # result1 = int(result1)

    # for j in b:
    #     num2.append(j)
    #     renum2 = num2[::-1]
    # result2 = ''.join(renum2)
    # result2 = int(result2)

    # result = result1 + result2
    # print(result)


if __name__ == '__main__':
    main() 
