from flask import g
from .base import * 


class Handouts:
    table_name = "handouts"

    @classmethod
    def all(cls):
        query = "select * from handouts"
        return select_query(g.conn, query)

    @classmethod
    def add(cls, sub, path, desc):
        query = "insert into handouts values (%s, %s, %s)"
        return insert_query(g.conn, query, (sub, path, desc))
