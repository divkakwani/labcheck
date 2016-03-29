from dbm import *
from models.base import new_connection, execute_query
from models import announcements, programs
from models import submissions, testcase
from models import attendance, student
from models import handouts, resources

conn = new_connection('labcheck')

all_tables = [announcements, programs, submissions, testcase,
              attendance, student, handouts, resources]

print('Setting up databases...')
for course in dbm.config['courses']:
    print('Setting up database for course: %s' % course)
    execute_query(conn, 'create database if not exists %s' % course)
    execute_query(conn, 'use %s' % course)
    for table in all_tables:
        print('Setting up %s table' % table.name)
        table.create(conn)
        print('%s table created' % table.name)
