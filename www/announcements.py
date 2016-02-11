"""
@author: Divyanshu
License: GPL

This module contains the definition of 'announcements' object.
This object is used to retrieve and insert specific instance
of annoucements from and to the underlying database.

"""


import MySQLdb

# TODO: Define the schema here
# TODO: delete an announcement?
# TODO: manage announcement objects

class Announcements(object):

    def __init__(self, db, table_name='announcements'):
        self.__db__ = db
        self.__cursor__ = db.cursor()
        self.__table_name__ = table_name

    def get_all(self):
        query = """select * from {}
                   order by timestamp desc""".format(self.__table_name__)
        self.__cursor__.execute(query)
        return [row for row in self.__cursor__]

    def most_recent(self, n=10):
        query = """select * from {0}
                   order by timestamp desc
                   limit {1}""".format(self.__table_name__, str(n))
        self.__cursor__.execute(query)
        return [row for row in self.__cursor__]

    def post(self, sub, desc, timestamp):
        query = """insert into {0} values 
                    ("{1}", "{2}", {3})""".format(self.__table_name__,
                                                  sub, desc, timestamp)
        print(query)
        self.__cursor__.execute(query)
        db.commit()

db = MySQLdb.connect(host='localhost',
                     user='root',
                     passwd='root',
                     db='labcheck')

announcements = Announcements(db)
