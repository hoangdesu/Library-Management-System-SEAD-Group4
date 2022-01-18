import requests
import json

bookId = 1
totalBooks = 1000000
book_list = []

while bookId <= totalBooks:
    API_endpoint = f'https://openlibrary.org/books/OL{bookId}M.json'
    res = requests.get(API_endpoint)
    if res.ok:
        content = res.json()
        if 'title' in content:
            book_list.append(content)
            print(bookId, content['title'], '-- ADDED --')
    bookId += 1
    
with open('./book_data.json', 'w') as file:
    json.dump(book_list, file, indent=4, ensure_ascii=False)
    file.close()

