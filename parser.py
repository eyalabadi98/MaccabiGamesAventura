

import csv
import json
import io

result = {}
index = 0
with io.open('example4.csv','rb') as pscfile:
    reader = csv.DictReader(pscfile)
    for row in reader:
        index += 1
        #if index > 18:
             #break
        #price =  row['Key']
        #print row
        #result.setdefault(key, []).append(row[?])
        result.setdefault(row['Key'], []).append(row)
        # result.keys().sort()
        print result





with open('result.json', 'w') as fp:
    json.dump(result, fp, ensure_ascii=False)

# with open("result.json", "r") as add:
#     json_data = json.load(add)
#     for change in json_data["CHILD"]:
#         # strip the contents of trailing white spaces (new line)
#         change["ORANGE"] = contents.strip()
#
# # dump json to another file
# with open("out.json", "w") as fout:
#     four.write(json.dumps(json_data, ensure_ascii=False))
