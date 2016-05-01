from .base import *


name = 'submissions'


def create(conn):
    query = """create table submissions(
                pid bigint,
                usn varchar(10),
                ans blob not null,
                time_stamp datetime not null,
                primary key(pid, usn),
                pid references programs(pid)
            );"""
    return create_table(conn, query)


def add(conn, pid, usn, ans, time):
    # Upsert query
    query = """insert into submissions values 
             (%s, %s, %s, %s)
             on duplicate key
                update ans=%s,
                       time_stamp=%s
            """
    return insert_query(conn, query, (pid, usn, ans, time, ans, time))


def get(conn, usn, pid):
    query = """select * from submissions where usn=%s and pid=%s"""
    result = select_query(conn, query, (usn, pid))[0]
    result = (result[0], result[1], result[2].decode(), result[3])
    return result


def all(conn, usn):
    query = """select * from submissions where usn=%s"""
    result = select_query(conn, query, (usn,))
    retval = list(map(lambda t: (t[0], t[1], t[2].decode(), t[3]), result))
    return retval
