import os
import mysql.connector
from dotenv import load_dotenv
load_dotenv()


myDB = mysql.connector.connect(
    host=os.environ.get("host"),
    user=os.environ.get("user"),
    password=os.environ.get("password"),
    database=os.environ.get("database")
)


my_cursor = myDB.cursor()

queries = ["SELECT * FROM cars where year >= 2015",
           "SELECT * FROM cars where year = 2009",
           "SELECT model, year FROM cars where make='tesla'"]


def getQueries(lst):
    for query in lst:
        my_cursor.execute(query)
        for x in my_cursor:
            print(x)
        print('---------------')


getQueries(queries)
