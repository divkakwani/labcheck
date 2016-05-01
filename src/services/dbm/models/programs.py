from .base import create_table, select_query

name = 'programs'

def create(conn):
    query = """create table programs (
                pid bigint primary key,
                title varchar(1000) not null,
                stmt varchar(10000) not null
            );"""
    return create_table(conn, query)


def add(conn, pid, title, stmt):
    query = "insert into programs values (%s, %s, %s)"
    return insert_into(conn, query, (pid, title, stmt))


def all(conn):
    query = "select * from programs"
    return select_query(conn, query)


def get(conn, pid):
    query = "select * from programs where pid=%s"
    return select_query(conn, query, (pid,))[0]


def title(conn, pid):
    query = "select title from programs where pid=%s"
    return select_query(conn, query, (pid,))[0][0]


def stmt(conn, pid):
    query = "select stmt from programs where pid=%s"
    return select_query(conn, query, (pid,))[0][0]


def remove(pid):
    pass

