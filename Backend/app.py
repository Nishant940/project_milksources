from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # React से API Call Allow करने के लिए

# MySQL Database Connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="yourpassword",  # अपना MySQL पासवर्ड डालें
        database="milksources"
    )

# ✅ Home Route
@app.route("/")
def home():
    return "Welcome to MilkSources Backend API!"

# ✅ 1. Login API (FIX)
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"message": "Login Successful", "user": user}), 200
    return jsonify({"message": "Invalid Credentials"}), 401

# ✅ 2. सभी Users को लाने के लिए API
@app.route('/users', methods=['GET'])
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    conn.close()
    return jsonify(users)

# ✅ 3. नया User जोड़ने के लिए API
@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", 
                   (data['name'], data['email'], data['password']))
    conn.commit()
    conn.close()
    return jsonify({"message": "User added successfully"}), 201

# ✅ 4. User अपडेट करने के लिए API
@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET name=%s, email=%s WHERE id=%s", 
                   (data['name'], data['email'], id))
    conn.commit()
    conn.close()
    return jsonify({"message": "User updated successfully"})

# ✅ 5. User को डिलीट करने के लिए API
@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users WHERE id=%s", (id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "User deleted successfully"})

# ✅ 6. Products API (React से Data Fetch करने के लिए)
@app.route('/api/products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")  # `products` टेबल से डेटा लाओ
    products = cursor.fetchall()
    conn.close()
    return jsonify(products)  # JSON डेटा React को भेजें

# ✅ API रन करने के लिए
if __name__ == '__main__':
    app.run(debug=True, port=5000)  # 👈 Port 5000 Confirm करें
