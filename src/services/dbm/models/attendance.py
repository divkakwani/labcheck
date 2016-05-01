from flask import g
from .base import *


table_name = 'attendance'


def create():
    query = """create table %s (
                usn varchar(10) not null references student(usn),
                attendance_date date not null,
                status boolean not null,
                primary key(usn, attendance_date)
             )""" % table_name
    return create_table(g.conn, query)


def mark_present(student, date):
    pass


def is_present(student, date):
    pass


def course_wise():
    pass


def day_wise(day):
    pass


def student_wise(usn):
    pass
