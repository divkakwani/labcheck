from flask import g
from .base import *


name = "handouts"


def create(conn):
    query = """
            create table handouts (
                id bigint primary key auto_increment,
                name varchar(100) not null,
                description varchar(10000),
                url varchar(1000) not null
            );
            """
    return create_table(conn, query)


def all(conn):
    query = "select * from handouts"
    return select_query(conn, query)


def get(id):
    query = "select * "


def add(sub, desc, path):
    query = "insert into handouts (name, description, url) values (%s, %s, %s)"
    return insert_query(g.conn, query, (sub, desc, path))
