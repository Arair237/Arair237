from flask import Flask, request,render_template

app = Flask(__name__)
@app.route('/', methods = ['get'])
def get():
    return render_template("index.html")

app.run(host = "127.0.0.1", port = 28288, debug = 'Ture')