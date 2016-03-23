from flask import g
from .base import *


table_name = "announcements"


@cached('all_announcements')
def all():
    query = "select * from %s order by timestamp desc" % table_name
    return select_query(g.conn, query)


def recent(n=10):
    query = "select * from %s order by timestamp desc limit %%s" % table_name
    return select_query(g.conn, query, (n,))


def add(sub, desc, time):
    query = "insert into %s values (%%s, %%s, %%s)" % table_name
    return insert_query(g.conn, query, (sub, desc, time))
