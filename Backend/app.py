from flask import Flask, request, jsonify

app = Flask(__name__)

# Example user database (replace this with your MySQL integration)
users = {
    "test@example.com": {"password": "password123", "user_id": 1}
}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if email in users and users[email]['password'] == password:
        return jsonify({"user_id": users[email]['user_id'], "message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
