from flask import render_template, Blueprint

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
