from .base import create_table, select_query
from .base import insert_query, cached


name = "announcements"


def create(conn):
    query = """create table announcements (
                id bigint not null auto_increment primary key,
                subject varchar(1000) not null,
                description varchar(10000) not null,
                timestamp datetime not null
            )"""
    return create_table(conn, query)


def all(conn):
    query = "select * from %s order by timestamp desc" % name
    return select_query(conn, query)


def nth_page(conn, n=1, pgsz=5):
    query = """select * from %s order by timestamp desc
               limit %%s offset %%s""" % name
    return select_query(conn, query, (pgsz, pgsz*(n-1)))


def add(conn, sub, desc, time):
    query = """insert into %s (subject, description, timestamp)
                values (%%s, %%s, %%s)""" % name
    return insert_query(conn, query, (sub, desc, time))
