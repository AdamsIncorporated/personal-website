from flask import render_template, Blueprint, send_from_directory

main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():
    return render_template('home.html', title='Home')


@main.route("/resume")
def resume():
    return render_template('resume.html', title='Resume')


@main.route("/about")
def about():
    return render_template('about.html', title='About')

@main.route('/download-pdf')
def download_pdf():
    pdf_filename = 'pdf/Samuel Adams Resume 2023.pdf'
    return send_from_directory('static', pdf_filename, as_attachment=True)
