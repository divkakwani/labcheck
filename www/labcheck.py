from flask import Flask, jsonify, request, redirect, make_response
from flask import render_template

from dbapi import api
from announcements import announcements
from time import strftime
from handouts import handouts


app = Flask(__name__)
app.register_blueprint(api, url_prefix='/api')
# app.config['UPLOAD_FOLDER'] = '/home/divakwani/PycharmProjects/labcheck/www/files'

@app.route('/')
def hello_world():
    return render_template('pages/index.html')


@app.route('/student')
def display_student_page():
    return render_template('student.html')


@app.route('/admin')
def display_admin_page():
    return render_template('admin.html')


if __name__ == '__main__':
    app.run(debug=True)
