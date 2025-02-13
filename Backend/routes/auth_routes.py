import sys
import os

# Backend को Python Path में ऐड करें
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from flask import Blueprint, request, jsonify, current_app
from models import db
from models.user_model import User  # ✅ सही इम्पोर्ट
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

auth_bp = Blueprint('auth', __name__)  # ✅ Blueprint का सही नामकरण

# ✅ यूजर रजिस्टर API
@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # ✅ इनपुट वैलिडेशन
        if not username or not email or not password:
            return jsonify({'message': 'Missing required fields'}), 400

        # ✅ पहले से ईमेल रजिस्टर्ड है या नहीं चेक करें
        if User.query.filter_by(email=email).first():
            return jsonify({'message': 'Email already exists'}), 400

        # ✅ नया यूजर बनाएं और पासवर्ड हैश करें
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        new_user = User(username=username, email=email, password_hash=hashed_password)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully'}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# ✅ लॉगिन API
@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')

        # ✅ यूजर ढूंढें
        user = User.query.filter_by(email=email).first()

        # ✅ यूजर व पासवर्ड चेक करें
        if not user or not check_password_hash(user.password_hash, password):
            return jsonify({'message': 'Invalid credentials'}), 401

        # ✅ JWT टोकन बनाएं
        token = jwt.encode(
            {'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)},
            current_app.config['SECRET_KEY'], 
            algorithm='HS256'
        )

        return jsonify({'token': token, 'username': user.username}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
