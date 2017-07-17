# import csv
#
# with open('Example-Eyal.csv', mode='r') as infile:
#     reader = csv.reader(infile)
#     for row in reader:
#         print row
# print "Hello"


import csv
import json

result = {}
index = 0
with open('SalesJan2009.csv','rb') as pscfile:
    reader = csv.DictReader(pscfile)
    for row in reader:
        index += 1
        if index > 3:
             break
        # for column, value in row.iteritems():
        #     result.setdefault(column, []).append(value)

        price =  row['Key']
        print price
        #result.setdefault(key, []).append(row[?])
        result.setdefault(row['Key'], []).append(row)
        result.keys().sort()
        print result





with open('result.json', 'w') as fp:
    json.dump(result, fp)

# index += 1
# if index > 10:
#     break
# if row in result:
#     pass
# result[row] = row
# print row[6]
