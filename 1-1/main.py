# 第8回：クラス
# ＜課題8-1＞
# 従業員の年収と住んでいる国を管理するプログラムを作成する．ただし，プログラムは，従業員という概念をクラスで定義して，書くこととする．このクラスの仕様は以下のとおりである．
# ===
# ＜クラス名＞
# employee
# ＜インスタンス変数＞
# name：従業員の名前を表す文字列型のデータ
# salary：年収を表す整数型のデータ
# country：国を表す文字列型のデータ
# ＜関数＞
# setName：その人の名前をセットする関数（名前を文字列型で受け取る）．受け取った値をクラスの内部変数nameに代入する．
# getName：その人の名前を取得する関数（名前を文字列型で返す）．クラスの内部変数nameを返す．
# setSalary：その人の年収をセットする関数（年収を整数型で受け取る）．受け取った値をクラスの内部変数salaryに代入する．
# getSalary：その人の年収を取得する関数（年収を整数型で返す）．クラスの内部変数salaryを返す．
# setCountry：その人の国をセットする関数（国名を文字列型で受け取る）．受け取った値をクラスの内部変数countryに代入する．
# getCountry：その人の国名を取得する関数（国名を文字列型で返す）．クラスの内部変数countryを返す．
# ===
# 上記のクラスを定義せよ．また，taroさんとhanakoさんの名前（フルネーム「Taro Yamada」と「Hanako Sato」）と年収（値は任意），国名（値は任意）をそれぞれキーボードから受け取り，taro, hanakoという変数名で，上記のクラスのインスタンスを作成し，キーボードから受け取った名前と年収，国名をそれぞれのインスタンスにインスタンス変数としてセットせよ．
# 次に，それらのインスタンスから，taroさんとhanakoさんの名前と年収，国名をgetName，getSalary, getCountryメソッドで取得し，print文で出力せよ．

# ＜実行結果＞
# E:\work> python kadai8-1.py
# Input name for Taro
# >>Taro Yamada
# Input salary for Taro
# >>5600000
# Input country for Taro
# >>Japan
# Input name for Hanako
# >>Hanako Sato
# Input salary for Hanako
# >>48000
# Input country for Hanako
# >>USA
# Taro's salary and country
# Taro Yamada 5600000 Japan
# Hanako's salary and country
# Hanako Sato 48000 USA



class Employee():
    def __init__(self, name, salary, country):
        self.name = name
        self.salary = salary
        self.country = country

    def setName(self,name):
        self.name = name

    def getName(self):
        return self.name

    def setSalary(self, salary):
        self.salary = salary

    def getSalary(self):
        return self.salary

    def setCountry(self, country):
        self.country = country

    def getCountry(self):
        return self.country

Taro = Employee(input("Input name for Taro"), input("Input salary for Taro"), input("Input country for Taro"))
Hanako = Employee(input("Input name for Hanako"), input("Input salary for Hanako"), input("Input country for Hanako"))
Taro.setName()
Taro.setSalary(salary)
Taro.setCountry(country)
print("Taro's salary and country")
print(Taro.getName(),Taro.getSalary(),Taro.getCountry())
print("Hanako's salary and country")
print(Hanako.getName(),Hanako.getSalary(),Hanako.getCountry())
