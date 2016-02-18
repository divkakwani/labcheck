
import MySQLdb

db = MySQLdb.connect(host='localhost',
                     user='root',
                     passwd='root',
                     db='labcheck')


# TODO: define the schema here


class Programs(object):

    def __init__(self, db, table_name='programs'):
        self.__db__ = db
        self.__cursor__ = db.cursor()
        self.__table_name__ = table_name

    def insert(self, coursecode, pgmcode, filepath):
        query = """ insert into {0}
                    values ("{1}", "{2}", "{3}")""".format(self.__table_name__,
                                                           coursecode, pgmcode, filepath)
        self.__cursor__.execute(query)
        db.commit()

    def get_all(self):
        query = """ select * from programs"""
        self.__cursor__.execute(query)
        return [row for row in self.__cursor__]

    def get_stmt(self, coursecode, pgmcode):
        query = """ select statement from programs
                    where coursecode="{0}" and pgmcode="{1}" """.format(coursecode,
                                                                        pgmcode)
        self.__cursor__.execute(query)
        return self.__cursor__.fetchone()[0]


programs = Programs(db)
