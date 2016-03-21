from flask import g
from base import select_query, insert_query


class Announcements:
    table_name = "announcements"

    @classmethod
    def all(cls):
        query = "select * from %s order by timestamp desc" % Announcements.table_name
        return select_query(g.conn, query)

    @classmethod
    def recent(cls, n=10):
        query = "select * from %s order by timestamp desc limit %%s" % Announcements.table_name
        return select_query(g.conn, query, (n,))

    @classmethod
    def post(cls, sub, desc, time):
        query = "insert into %s values (%%s, %%s, %%s)" % Announcements.table_name
        return insert_query(g.conn, query, (sub, desc, time))
