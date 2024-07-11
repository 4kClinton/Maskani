from flask import Flask
from models import db
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api



app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///maskani.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

db = SQLAlchemy(app)

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)