import MySQLdb
from threading import Lock
from dbm import *


def new_connection():
    return MySQLdb.connect(host=dbm.config['host'],
                           user=dbm.config['user'],
                           passwd=dbm.config['passwd'],
                           db=dbm.config['db'])


class DatabaseConnector:
    """
    Stores a pool of connections to mysql. Upon requests, it transfers those
    connections to the requesters. Later, when a requesters releases a connection,
    it re-adds it to its connection pool.
    """
    mutex = Lock()
    free_connections = []

    @classmethod
    def initialize(cls, connections=200):
        for i in range(100):
            DatabaseConnector.free_connections.append(new_connection())

    @classmethod
    def get_connection(cls):
        conn = None
        DatabaseConnector.mutex.acquire()
        if len(DatabaseConnector.free_connections) > 0:
            conn = DatabaseConnector.free_connections.pop()
        DatabaseConnector.mutex.release()
        if not conn or conn.open == 0:
            conn = new_connection()
        return conn

    @classmethod
    def release(cls, conn):
        DatabaseConnector.mutex.acquire()
        DatabaseConnector.free_connections.append(conn)
        DatabaseConnector.mutex.release()

    def __init__(self):
        raise Exception('The class is not instantiable')


def execute_query(conn, query, params=None):
    cursor = conn.cursor()
    cursor.execute(query, params)
    conn.commit()
    return cursor


def select_query(conn, query, params=None):
    cursor = execute_query(conn, query, params)
    return [row for row in cursor]


def insert_query(conn, query, params=None):
    execute_query(conn, query, params)
