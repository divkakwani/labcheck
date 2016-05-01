
"""
This module contains a task queue which generates
pdf-reports given all the submissions.
"""

# import celery

import jinja2
import os
from jinja2 import Template

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

template = latex_jinja_env.get_template('manual.tex')

program1 = {'title': 'semaphore', 'stmt': 'implement it', 'solution': 'def doit(what): pass'}
program2 = {'title': 'tcp', 'stmt': 'implement it', 'solution': 'def doit(what): pass'}



with open('processed.tex', 'w') as f:
    f.write(template.render(coursename="Experimental Physics", student={'name':'Aristotle', 'usn':'1RV13IS015'}, incharges=['Plato', 'Copernicus'],
                           programs=[program1, program2] ))
