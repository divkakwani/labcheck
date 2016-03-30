from flask import Flask, jsonify, request,\
                  redirect, make_response, g

# First create the application object and
# later do rest of the imports
dbm = Flask(__name__)


import config
from models.base import DatabaseConnector
from models import handouts
from models import announcements
from models import programs
from time import strftime


"""
Error Handlers
"""

@dbm.errorhandler(Exception)
def handle_invalid_usage(error):
    response = jsonify(error=1)
    response.status_code = 410
    return response


"""
URL Preprocessor
"""

@dbm.url_value_preprocessor
def set_course(endpoint, values):
    if values['coursecode'] not in ['12IS35', 'labcheck']:
        raise Exception('No such course')
    g.coursecode = values['coursecode']

"""
General request setup
"""

@dbm.before_first_request
def before_first_request():
    DatabaseConnector.initialize(['labcheck', '12IS35'], 50)


@dbm.before_request
def before_request():
    print(g.coursecode)
    g.conn = DatabaseConnector.get_connection(g.coursecode)


@dbm.teardown_request
def teardown_request(exception):
    DatabaseConnector.release(g.conn)


"""
Handouts API
"""

@dbm.route('/<coursecode>/handouts', methods=['GET'])
def get_handouts(coursecode):
    return jsonify(results=handouts.all())


@dbm.route('/<coursecode>/handouts', methods=['POST'])
def post_handouts(coursecode):
    # save file on sys
    path = '/home/divkakwani/PycharmProjects/labcheck/www/files/handouts/' + request.files['file'].filename
    request.files['file'].save(path)
    handouts.add(request.form.get('sub'), path, request.form.get('desc'))
    return jsonify(results=1)


"""
Announcements API
"""

@dbm.route('/<coursecode>/announcements', methods=['GET'])
def get_announcements(coursecode):
    return jsonify(results=announcements.all())


@dbm.route('/<coursecode>/announcements/<pgno>', methods=['GET'])
def get_announcements_page(coursecode, pgno):
    return jsonify(results=announcements.nth_page(int(pgno)))


@dbm.route('/<coursecode>/announcements', methods=['POST'])
def post_announcements(coursecode):
    announcements.post(request.form.get('sub'),
                       request.form.get('desc'),
                       strftime('%Y%m%d%H%M%S'))
    return jsonify(results=1)


"""
Programs API
"""

@dbm.route('/<coursecode>/programs', methods=['GET'])
def get_programs(coursecode):
    return jsonify(results=programs.all())
    

@dbm.route('/<coursecode>/programs/<id>')
def get_program_by_id(coursecode, id):
    return jsonify(results=programs.get(id))


@dbm.route('/<coursecode>/programs/<id>/title')
def get_title_by_id(coursecode, id):
    return jsonify(results=programs.title(id))


@dbm.route('/<coursecode>/programs/<id>/stmt')
def get_stmt_by_id(coursecode, id):
    return jsonify(results=programs.stmt(id))


if __name__ == '__main__':
    dbm.run(debug=True)
