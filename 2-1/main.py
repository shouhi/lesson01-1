def main():
  a = list(map(int,input().split()))
  b = a[0]/a[1]*100
  b = round(b)
  print("{}%".format(b))


if __name__ == '__main__':
    main() 
