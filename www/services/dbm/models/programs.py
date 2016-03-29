from flask import g
from .base import create_table, select_query

name = 'programs'

def create(conn=None):
    query = """create table programs (
                pid bigint primary key,
                title varchar(1000) not null,
                stmt varchar(10000) not null
            );"""
    return create_table(conn or g.conn, query)


def add(pid, title, stmt):
    query = "insert into programs values (%s, %s, %s)"
    return insert_into(g.conn, query, (pid, title, stmt))


def all():
    query = "select * from programs"
    return select_query(g.conn, query)


def get(pid):
    query = "select * from programs where pid=%s"
    return select_query(g.conn, query, (pid,))


def title(pid):
    query = "select title from programs where pid=%s"
    return select_query(g.conn, query, (pid,))[0][0]


def stmt(pid):
    query = "select stmt from programs where pid=%s"
    return select_query(g.conn, query, (pid,))[0][0]


def remove(pid):
    pass

