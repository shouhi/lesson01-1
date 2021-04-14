import sys


def main():
    arg = sys.argv[1:]
    #print(arg)

    target = ':'
    idx = arg[0].find(target)

    hour = arg[0][:idx]
    hour = int(hour)
    minute = arg[0][idx+1:]
    minute = int(minute)

    minuteAll = minute + hour*60
    minute45 = minuteAll + 45

    hourResult1 = minute45//60
    if 24 <= hourResult1:
        hourResult2 = hourResult1-24
    elif hourResult1 < 24:
        hourResult2 = hourResult1
    minuteResult = minute45 - hourResult1*60

    print(hourResult2)
    print(minuteResult)


if __name__ == '__main__':
    main()