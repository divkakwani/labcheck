import MySQLdb
from threading import Lock
from werkzeug.contrib.cache import SimpleCache

# Global cache-storage
cache = SimpleCache()



# TODO: Return connection to the pool
class DatabaseConnector:
    """
    Stores a pool of connections to multiple databases. Upon
    requests, it transfers those connections to the requesters.
    Later, when a requesters releases a connection, it re-adds
    it to its connection pool.
    """
    mutex = Lock()
    free_connections = {}

    @classmethod
    def initialize(cls, host, user, passwd, dbs, per_db_connections):
        """
        :param dbs The list of databases to which it
                   holds connections
        """
        DatabaseConnector.host = host
        DatabaseConnector.user = user
        DatabaseConnector.passwd = passwd
        for db in dbs:
            DatabaseConnector.free_connections[db] = \
                    [DatabaseConnector.__new_connection(db) for i in range(per_db_connections)]


    @classmethod
    def __new_connection(cls, db):
        return MySQLdb.connect(host=DatabaseConnector.host,
                               user=DatabaseConnector.user,
                               passwd=DatabaseConnector.passwd,
                               db=db)

    
    @classmethod
    def get_connection(cls, db):
        conn = None
        DatabaseConnector.mutex.acquire()
        if len(DatabaseConnector.free_connections[db]) > 0:
            conn = DatabaseConnector.free_connections[db].pop()
        DatabaseConnector.mutex.release()
        if not conn: 
            conn = DatabaseConnector.__new_connection(db)
        conn.ping()
        return conn

    @classmethod
    def release(cls, conn):
        try:
            conn.close()
        except:
            pass
        # DatabaseConnector.mutex.acquire()
        # DatabaseConnector.free_connections.append(conn)
        # DatabaseConnector.mutex.release()

    def __init__(self):
        raise Exception('The class is not instantiable')


def execute_query(conn, query, params=None):
    cursor = conn.cursor()
    cursor.execute(query, params)
    conn.commit()
    print("Executing a query")
    print("Last executed:", cursor._last_executed)
    return cursor


def select_query(conn, query, params=None):
    cursor = execute_query(conn, query, params)
    return [row for row in cursor]


def insert_query(conn, query, params=None):
    execute_query(conn, query, params)


def create_table(conn, query, params=None):
    execute_query(conn, query, params)


def cached(name):
    """
    Caching decorator
    """
    def decorator(func):
        def wrapper_func(*args, **kwargs):
            ans = cache.get(name)
            if not ans:
                print('cache miss')
                ans = func(*args, **kwargs)
                cache.set(name, ans)
            return ans
        return wrapper_func
    return decorator


