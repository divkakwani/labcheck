from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('pages/index.html')


@app.route('/student')
def display_student_page():
    return render_template('pages/student/student.html')


@app.route('/admin')
def display_admin_page():
    return render_template('admin.html')


if __name__ == '__main__':
    app.run()
