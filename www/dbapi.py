from flask import Blueprint
from flask import jsonify
from announcements import announcements
from handouts import handouts
from flask import Flask, jsonify, request, redirect, make_response
from time import strftime
from programs import programs

api = Blueprint('api', __name__)

@api.route('/handouts', methods=['GET'])
def get_handouts():
    return jsonify(results=handouts.get_all())

@api.route('/handouts', methods=['POST'])
def post_handouts():
    # save file on sys
    path = '/home/divkakwani/PycharmProjects/labcheck/www/files/' + request.files['file'].filename
    request.files['file'].save(path)
    handouts.insert(request.form.get('sub'), path, request.form.get('desc'))
    response = make_response(redirect('/admin'))
    return response

@api.route('/announcements', methods=['GET'])
def get_announcements():
    return jsonify(results=announcements.get_all())

@api.route('/announcements', methods=['POST'])
def post_announcements():
    announcements.post(request.form.get('sub'),
                       request.form.get('desc'),
                       strftime('%Y%m%d%H%M%S'))
    return make_response(redirect('/admin'))

@api.route('/programs/<coursecode>/<pgmcode>', methods=['GET'])
def get_program(coursecode, pgmcode):
    filepath = programs.get_stmt(coursecode, pgmcode)
    try:
        f = open(filepath)
    except:
        return FileNotFoundError
    return f.read()

