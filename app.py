import os
import json

from functools import wraps
from flask import Flask, request, send_from_directory, redirect, make_response, render_template

"""
GLOBAL VARIABLES ########################################################################################################
"""
app = Flask(__name__)
app.config.update({
    "SECRET_KEY": "6w_#w*~AVts3!*yd&C]jP0(x_1ssd]MVgzfAw8%fF+c@|ih0s1H&yZQC&-u~O[--"  # For the session
    })


"""
UTILS ###################################################################################################################
"""


"""
ROUTES ##################################################################################################################
"""


@app.route('/<path:filename>')
def serve_static_html(filename):
    """ serve_static_html() generic route function to serve files in the 'static' folder """
    # print("serve_static_html('{0}')".format(filename))
    root_dir = os.path.dirname(os.path.realpath(__file__))
    return send_from_directory(os.path.join(root_dir, 'static'), filename)


@app.route('/')
def index():
    """ handler for the root url path of the app """
    print("index()")

    return serve_static_html("index.html")