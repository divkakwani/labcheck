from flask import g
from .base import *


table_name = "handouts"


def all():
    query = "select * from handouts"
    return select_query(g.conn, query)


def add(cls, sub, path, desc):
    query = "insert into handouts values (%s, %s, %s)"
    return insert_query(g.conn, query, (sub, path, desc))
