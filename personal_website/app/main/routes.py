from flask import render_template, request, redirect, url_for, Blueprint, send_from_directory

main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():
    page = request.args.get('page', 1, type=int)
    return render_template('home.html', title='Home')


@main.route("/resume")
def resume():
    return render_template('resume.html', title='Resume')