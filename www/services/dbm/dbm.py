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



@dbm.before_first_request
def before_first_request():
    DatabaseConnector.initialize(500)


@dbm.before_request
def before_request():
    g.conn = DatabaseConnector.get_connection()


@dbm.teardown_request
def teardown_request(exception):
    DatabaseConnector.release(g.conn)


@dbm.route('/handouts', methods=['GET'])
def get_handouts():
    return jsonify(results=handouts.all())


@dbm.route('/handouts', methods=['POST'])
def post_handouts():
    # save file on sys
    path = '/home/divkakwani/PycharmProjects/labcheck/www/files/handouts/' + request.files['file'].filename
    request.files['file'].save(path)
    handouts.add(request.form.get('sub'), path, request.form.get('desc'))
    return jsonify(results=1)


@dbm.route('/announcements', methods=['GET'])
def get_announcements():
    return jsonify(results=announcements.all())


@dbm.route('/announcements', methods=['POST'])
def post_announcements():
    announcements.post(request.form.get('sub'),
                       request.form.get('desc'),
                       strftime('%Y%m%d%H%M%S'))
    return jsonify(results=1)


@dbm.route('/programs/<coursecode>/<pgmcode>', methods=['GET'])
def get_program(coursecode, pid):
    filepath = programs.get_stmt(coursecode, pgmcode)
    try:
        f = open(filepath)
    except:
        return FileNotFoundError
    return f.read()

if __name__ == '__main__':
    dbm.run(debug=True)
