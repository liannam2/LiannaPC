import csv

data = [
  ['Item', 'Quantity'],
  ['Blender', 2],
  ['Posters', 30],
  ['Shoes', 2]
]

try:
    with open('packing_list.csv', 'r', encoding='utf8') as csv_file:
        csv_reader = csv.reader(csv_file)
        
        for row in csv_reader:
            print(row)
except FileNotFoundError:
        print("Packing List not found. Creating a new one.")
        with open('packing_list.csv', 'w', newline='', encoding='utf8') as csv_file:
            csv_writer = csv.writer(csv_file)
            csv_writer.writerows(data)