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







a ,b= map(int,input().split())
c = []
d = []
a = abs(a)
a_str = str(a)
a_len = len(a_str)
b_len = len(str(abs(b)))
a = int(a)
b = int(b)
e = a
f = b
for i in reversed(range(a_len)):
    c.append(e//pow(10,i))
    e = a%pow(10,i)

for i in reversed(range(b_len)):
    d.append(f//pow(10,i))
    f= b%pow(10,i)

c.reverse()
d.reverse()
z = len(c)
y = len(d)

g =0
v =0

for i in range(len(c)):

    g += c[i]*pow(10,z-1)
    z -= 1

for i in range(len(d)):
    v += d[i]*pow(10,y-1)
    y -= 1

sum = g+v
print(sum)