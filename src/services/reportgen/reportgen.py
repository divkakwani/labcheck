import jinja2
import os
import sys
from jinja2 import Template
import requests


latex_jinja_env = jinja2.Environment(
    block_start_string = '\BLOCK{',
    block_end_string = '}',
    variable_start_string = '\VAR{',
    variable_end_string = '}',
    comment_start_string = '\#{',
    comment_end_string = '}',
    line_statement_prefix = '%%',
    line_comment_prefix = '%#',
    trim_blocks = True,
    autoescape = False,
    loader = jinja2.FileSystemLoader(os.path.abspath('.'))
)

# Record template
template = latex_jinja_env.get_template('template/record.tex')


def get_student_name(usn):
    pass

def get_data(url):
    response = requests.get(url)
    return response.json()

def get_submissions(coursecode, usn):
    data = get_data('http://localhost/dbm/%s/submissions/%s' % (coursecode, usn)) 
    return data['results']

def get_programs(coursecode):
    data = get_data('http://localhost/dbm/%s/programs' % (coursecode,))
    return data['results']


# Obtain all parameters
# Input Parameters:
coursecode = sys.argv[1]
usn = sys.argv[2]
# Computed Parameters:
name = 'Divyanshu Kakwani' 
submissions = get_submissions(coursecode, usn)
programs = get_programs(coursecode)
# coursename = 
# incharges =


print(template.render(student={'usn': usn, 'name': name}, programs=programs, submissions=submissions))
