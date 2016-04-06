from flask import Flask, jsonify, request, redirect, make_response
from flask import render_template, session, flash
import re
from time import strftime


app = Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'


@app.route('/')
def authenticate():
    return render_template('authenticate.html')


def validate_usn(usn):
    pattern = re.compile('^1RV[0-1][1-9](IS|CS|EC)[0-1][0-9][0-9]$')
    return True if pattern.match(usn) else None


def validate_coursecode(coursecode):
    pattern = re.compile('^1[1-9](IS|CS|EC)[0-9][0-9]$')
    return True if pattern.match(coursecode) else None


@app.route("/studentlogin", methods=['POST'])
def student_login():
    valid = True
    if not validate_usn(request.form.get('usn')):
        flash('Invalid USN. Must match: ^1RV[0-1][1-9](IS|CS|EC)[0-1][0-9][0-9]$')
        valid = False
    if not validate_coursecode(request.form.get('coursecode')):
        flash('Invalid coursecode. Must match: ^1[1-9](IS|CS|EC)[0-9][0-9]$')
        valid = False
    if not valid:
        return redirect('/')
    session['coursecode'] = request.form.get('coursecode') 
    session['usn'] = request.form.get('usn')
    return redirect('/student')


@app.route('/adminlogin', methods=['POST'])
def admin_login():
    valid = True
    if not validate_coursecode(request.form.get('coursecode')):
        flash('Invalid coursecode. Must match: ^1[1-9](IS|CS|EC)[0-9][0-9]$')
        valid = False
    if not valid:
        return redirect('/')
    session['coursecode'] = request.form.get('coursecode')
    return redirect('/admin')


@app.route('/student', methods=['GET', 'POST'])
def display_student_page():
    if request.method == 'GET':
        if 'usn' in session:
            return render_template('student.html', usn=session['usn'], coursecode=session['coursecode'])
        else:
            return redirect('/')


@app.route('/admin', methods=['GET', 'POST'])
def display_admin_page():
    if request.method == 'GET':
        if 'accesskey' in session:
            return render_template('admin.html')
        else:
            return redirect('/')
    if request.method == 'POST':
        session['course'] = request.form.get('course')
        session['accesskey'] = request.form.get('accesskey')
        return render_template('admin.html')


@app.route('/getsession', methods=['GET'])
def display_session():
    return jsonify(usn=session['usn'], coursecode=session['coursecode'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
