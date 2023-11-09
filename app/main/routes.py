from flask import render_template, Blueprint, send_from_directory, redirect, request, url_for, flash
import smtplib
from email.message import EmailMessage
import os
import ssl
from .utils import Utils

main = Blueprint('main', __name__)


@main.route("/", methods=['GET'])
@main.route("/home", methods=['GET'])
def home():
    return render_template('home.html', title='Home')


@main.route("/resume")
def resume():
    return render_template('resume.html', title='Resume')


@main.route("/about")
def about():
    return render_template('about.html', title='About')


@main.route("/projects")
def projects():
    return render_template('projects.html', title='Projects')


@main.route('/download-pdf')
def download_pdf():
    pdf_filename = 'pdf/Samuel Adams Resume 2023.pdf'
    return send_from_directory('static', pdf_filename, as_attachment=True)

@main.route('/render-table')
def render_table():
    balance_sheet_json = Utils.get_stock_data('TGT')
    return balance_sheet_json

@main.route('/email', methods=['POST'])
def form():
    if request.method == 'POST':
        first_name = request.form.get("first-name")
        last_name = request.form.get("last-name")
        msg = request.form.get("message")
        email = "samuel.grant.adams@gmail.com"
        subject = "Hellow World!"

        em = EmailMessage()
        em['From'] = email
        em['To'] = email
        em['Subject'] = subject
        em.set_content(msg)

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            # os.getenv("EMAIL_PASSWORD")
            server.login(email, 'ntew jysy biuz aapk')
            server.sendmail(to_addrs=email, from_addr=email, msg=em.as_string())
        
        if not first_name or not last_name or not msg:
            error_statement = "All Form Fields are Required"
            flash("All Form Fields are Required", "error")
            return redirect(url_for('main.home'))
        else: 
            flash("Email sent to Sam!", "success")
            
        return redirect(url_for('main.home'))



