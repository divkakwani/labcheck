from flask import Flask, jsonify, request, redirect, make_response
from flask import render_template

from announcements import announcements
from time import strftime

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('pages/index.html')


@app.route('/student')
def display_student_page():
    return render_template('student.html')


@app.route('/admin')
def display_admin_page():
    return render_template('admin.html')


@app.route('/get/handouts')
def get_handouts():
    handouts = [{'name': 'codd', 'size': '2MB'}]
    return jsonify(handouts)


@app.route('/get/announcements')
def get_announcements():
    return jsonify(results=announcements.get_all())


@app.route('/admin', methods=['POST'])
def post_announcements():
    announcements.post(request.form.get('sub'),
                       request.form.get('desc'),
                       strftime('%Y%m%d%H%M%S'))
    response = make_response(redirect('/admin'))
    return response


if __name__ == '__main__':
    app.run(debug=True)
