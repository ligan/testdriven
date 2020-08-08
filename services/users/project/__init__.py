# services/users/project/__init__.py

from flask_sqlalchemy import SQLAlchemy  # new
from flask import Flask
import os  # new
import werkzeug
werkzeug.cached_property = werkzeug.utils.cached_property

db = SQLAlchemy()


def create_app(script_info=None):
    app = Flask(__name__)

    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    db.init_app(app)

    from project.api.users import users_blueprint
    app.register_blueprint(users_blueprint)

    @app.shell_context_processor
    def ctx():
        return {'app': app, 'db': db}

    return app
