"""

## Flaws

"""


import MySQLdb

db = MySQLdb.connect(host='localhost',
                     user='root',
                     passwd='root',
                     db='labcheck')


# TODO: define the schema here


class Handouts(object):
    
    def __init__(self, db, table_name='handouts'):
        self.__db__ = db
        self.__cursor__ = db.cursor()
        self.__table_name__ = table_name
    
    def insert(self, name, filepath, desc=''):
        query = """ insert into {0} 
                    values ("{1}", "{2}", "{3}")""".format(self.__table_name__,
                                                           name, desc, filepath)
        self.__cursor__.execute(query)
        db.commit()

    def get_all(self):
        query = """ select * from handouts"""
        self.__cursor__.execute(query)
        return [row for row in self.__cursor__]


handouts = Handouts(db)







