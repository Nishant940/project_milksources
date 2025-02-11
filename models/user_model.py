# models/user_model.py
from app import db  # Import db where it's used, not at the module level

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    # Add other fields as needed
