import sys


def main():
    a = int(sys.argv[1])
    b = int(sys.argv[2])

    result = []
    line1 = []
    line2 = []
    for i in range(b):
        checki = i%2
        if b>0 and checki!=0:
            line1.append('*')
            line2.append('_')
        elif b>0 and checki==0:
            line1.append('_')
            line2.append('*')

    for j in range(a):
        checkj = j%2
        if a>0 and checkj!=0:
            result.append(line1)
        elif a>0 and checkj==0:
            result.append(line2)

    for results in result:
        print(*results)


if __name__ == '__main__':
    main() 
