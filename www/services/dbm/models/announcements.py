from flask import g
from .base import *


name = "announcements"


def create(conn):
    query = """create table announcements (
                id bigint not null auto_increment primary key,
                subject varchar(1000) not null,
                description varchar(10000) not null,
                timestamp datetime not null
            )"""
    return create_table(conn or g.conn, query)


@cached('all_announcements')
def all():
    query = "select * from %s order by timestamp desc" % name 
    return select_query(g.conn, query)


def nth_page(n=1, pgsz=5):
    query = """select * from %s order by timestamp desc
               limit %%s offset %%s""" % name 
    return select_query(g.conn, query, (pgsz, pgsz*(n-1)))


def add(sub, desc, time):
    query = """insert into %s (subject, description, timestamp) 
                values (%%s, %%s, %%s)""" % name 
    return insert_query(g.conn, query, (sub, desc, time))
