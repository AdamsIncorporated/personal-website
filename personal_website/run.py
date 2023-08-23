import os
import webbrowser

from app import create_app

def main():

    # The reloader has not yet run - open the browser
    if not os.environ.get("WERKZEUG_RUN_MAIN"):
        webbrowser.open_new('http://127.0.0.1:2000/')

    # Otherwise, continue as normal
    app = create_app()
    app.run(host="127.0.0.1", debug=True, port=2000)


if __name__ == '__main__':
    main()
