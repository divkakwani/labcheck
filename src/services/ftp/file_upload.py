import os
from flask import Flask, request 
from flask import session, jsonify, send_from_directory
from werkzeug import secure_filename

# Initialize the Flask application
app = Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'


# This is the path to the upload directory
app.config['UPLOAD_FOLDER'] = 'uploads/'
# These are the extension that we are accepting to be uploaded
app.config['ALLOWED_EXTENSIONS'] = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'md'])

# For a given file, return whether it's an allowed type or not
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']


@app.route('/<coursecode>/statements/<id>', methods=['POST'])
def upload_program(coursecode, id):
    file = request.files['file']
    if file and allowed_file(file.filename):
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], 
                               coursecode, 'statements', id))
        return jsonify(success=1)


@app.route('/<coursecode>/statements/<id>', methods=['GET'])
def send_programs(coursecode, id):
    print('here')
    return send_from_directory(os.path.join(app.config['UPLOAD_FOLDER'], coursecode, 'statements'), id)


@app.route('/<coursecode>/submissions/<usn>/<id>', methods=['POST'])
def upload_submission(coursecode, usn, id):
    file = request.files['file']
    if file and allowed_file(file.filename):
        file.save(os.path.join(app.config['UPLOAD_FOLDER'],
                               coursecode, 'submissions', 
                               usn, id))
        return jsonify(success=1)


@app.route('/<coursecode>/handouts', methods=['POST'])
def upload_handouts(coursecode):
    file = request.files['file']
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'],
                               coursecode, 
                               'handouts', filename))
        return jsonify(success=1)


@app.route('/<coursecode>/handouts/<name>', methods=['GET'])
def send_handouts(coursecode, name):
    return send_from_directory(os.path.join(app.config['UPLOAD_FOLDER'], coursecode, 'handouts'), name)


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
