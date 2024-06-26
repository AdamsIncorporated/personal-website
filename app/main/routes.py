from flask import (
    render_template,
    Blueprint,
    send_from_directory,
    redirect,
    request,
    url_for,
    flash,
)
import smtplib
from email.message import EmailMessage
import ssl
from .utils import Utils
import os

main = Blueprint("main", __name__)


@main.route("/", methods=["GET"])
@main.route("/home", methods=["GET"])
def home():
    return render_template("home.html", title="Home")


@main.route("/resume")
def resume():
    return render_template("resume.html", title="Resume")


@main.route("/about")
def about():
    return render_template("about.html", title="About")


@main.route("/blog/<string:section>")
def blog(section):
    match section:
        case "argentina":
            file_name = "blogs/International Economics Project 1.html"
        case "target":
            file_name = "blogs/target.html"
        case "home":
            file_name = "blog.html"

    return render_template(f"{file_name}", title="Blog")


@main.route("/projects")
def projects():
    return render_template("projects.html", title="Projects")


@main.route("/download-pdf")
def download_pdf():
    pdf_filename = "pdf/Samuel Adams Resume.pdf"
    return send_from_directory("static", pdf_filename, as_attachment=True)


@main.route("/render-table")
def render_table():
    balance_sheet_json = Utils.get_stock_data("TGT")
    return balance_sheet_json


@main.route("/email", methods=["POST"])
def form():
    if request.method == "POST":
        first_name = request.form.get("first-name")
        last_name = request.form.get("last-name")
        msg = f"""
            {first_name}
            {last_name}
            {request.form.get("message")}
        """
        email = "samuel.grant.adams@gmail.com"
        subject = "From you wesbite: Hello World!"

        em = EmailMessage()
        em["From"] = email
        em["To"] = email
        em["Subject"] = subject
        em.set_content(msg)

        context = ssl.create_default_context()
        HOST = os.getenv("HOST")
        SMTP_PORT = os.getenv("SMTP_PORT")
        SMTP_PASSWORD = os.getenv("SMTP_PORT")
        print(SMTP_PASSWORD)

        with smtplib.SMTP_SSL(HOST, SMTP_PORT, context=context) as server:
            # os.getenv("EMAIL_PASSWORD")
            server.login(email, SMTP_PASSWORD)
            server.sendmail(to_addrs=email, from_addr=email, msg=em.as_string())
            flash("Email sent to Sam!", "success")

        return redirect(url_for("main.home"))
