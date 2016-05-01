


table_name = "students"

def create():
    query = """create table %s (
                usn varchar(10) primary key,
                name varchar(100) not null,
                semester varchar(10) not null,
                branch varchar(10) not null
            )"""
