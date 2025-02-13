from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Ensure user model is imported correctly
from models.user_model import User  # ✅ user_model को import करें
