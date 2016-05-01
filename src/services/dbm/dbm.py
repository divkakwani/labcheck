from flask import Flask, jsonify, request
from flask import g
from config import configdict
from models.base import DatabaseConnector
from models import handouts
from models import announcements
from models import programs
from models import submissions
from time import strftime
import os
import requests

dbm = Flask(__name__)
dbm.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
dbm.config.update(configdict)


"""
Error Handlers
"""


# @dbm.errorhandler(Exception)
# def handle_invalid_usage(error):
#     response = jsonify(error=1)
#     response.status_code = 410
#     return response


"""
General request setup
"""


@dbm.before_first_request
def before_first_request():
    DatabaseConnector.initialize(dbm.config['dbms']['host'],
                                 dbm.config['dbms']['user'],
                                 dbm.config['dbms']['passwd'],
                                 dbm.config['courses'], 10)


@dbm.url_value_preprocessor
def set_coursecode(endpoint, values):
    g.coursecode = values.pop('coursecode')
    if g.coursecode not in dbm.config['courses']:
        raise Exception('Invalid Course')
    g.conn = DatabaseConnector.get_connection(g.coursecode)


@dbm.teardown_request
def teardown_request(exception):
    DatabaseConnector.release(g.conn)


"""
Handouts API
"""

@dbm.route('/<coursecode>/handouts', methods=['GET'])
def get_handouts():
    return jsonify(results=handouts.all(g.conn))


@dbm.route('/<coursecode>/handouts', methods=['POST'])
def post_handouts():
    file = request.files['file']
    url = 'http://localhost/ftp/' + g.coursecode + '/handouts'
    requests.post(url, files={'file': (file.filename, file)})
    handouts.add(request.form.get('name'), request.form.get('desc'), url + '/' +file.filename)
    return jsonify(results=1)


"""
Announcements API 
"""

@dbm.route('/<coursecode>/announcements', methods=['GET'])
def get_announcements():
    return jsonify(results=announcements.all(g.conn))


@dbm.route('/<coursecode>/announcements/<pgno>', methods=['GET'])
def get_announcements_page(pgno):
    return jsonify(g.conn, results=announcements.nth_page(int(pgno)))


@dbm.route('/<coursecode>/announcements', methods=['POST'])
def post_announcements():
    announcements.add(g.conn,
                      request.form.get('sub'),
                      request.form.get('desc'),
                      strftime('%Y%m%d%H%M%S'))
    return jsonify(results=1)


"""
Programs API
"""

@dbm.route('/<coursecode>/programs', methods=['GET'])
def get_programs():
    return jsonify(results=programs.all(g.conn))
    

@dbm.route('/<coursecode>/programs/<id>')
def get_program_by_id(id):
    return jsonify(results=programs.get(g.conn, id))


@dbm.route('/<coursecode>programs/<id>/title')
def get_title_by_id(id):
    return jsonify(results=programs.title(g.conn, id))


@dbm.route('/<coursecode>/programs/<id>/stmt')
def get_stmt_by_id(id):
    return jsonify(results=programs.stmt(g.conn, id))



"""
Submissions API
"""

@dbm.route('/<coursecode>/submissions/<usn>', methods=['GET'])
def get_sumbissions(usn):
    return jsonify(results=submissions.all(g.conn, usn))


@dbm.route('/<coursecode>/submissions/<usn>/<id>', methods=['GET'])
def get_sumbission_by_id(usn, id):
    res = submissions.get(g.conn, usn, id)
    return jsonify(results=res)


@dbm.route('/<coursecode>/submissions/<usn>/<id>', methods=['POST'])
def make_submission(usn, id):
        return jsonify(results=submissions.add(g.conn, int(id), usn, request.files['file'].read(), strftime('%Y%m%d%H%M%S')))



if __name__ == '__main__':
    dbm.run(port=3421, debug=True)
