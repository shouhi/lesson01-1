import json

users = open('./users.json', 'r')
users_dict = json.load(users)['users']  # 辞書型で読み込み
print(users_dict)

xYears_A = 3000
money_A = 120000
money_A_Less5 = 100000

xYears_B = 4000
money_B = 140000

xYears_C = 5000
money_C = 160000


# それぞれの場合について、新しいkeyとしてsalaryを追加して給料を計算する
for i in users_dict:
    if i['rank'] == 'A':
        if 5 <= i['years']:
            i.update(salary = xYears_A*i['years']+money_A)
        else:
            i.update(salary = xYears_A*i['years']+money_A_Less5)

    elif i['rank'] == 'B':
        i.update(salary = xYears_B*i['years']+money_B)

    elif i['rank'] == 'C':
        i.update(salary = xYears_C*i['years']+money_C)

# keyを指定して並び替え
sorted_users_dict = sorted(users_dict, key=lambda x:x['salary'],reverse=True)

# nameとsalaryを表示
for i in sorted_users_dict:
    print(i['name']+':'+str(i['salary'])) 
