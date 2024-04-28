from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.security import generatepasswordhash, checkpasswordhash
from flask_cors import CORS

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database_name']
users_collection = db['users']

# Sign-up route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if username already exists
    if users_collection.find_one({'username': username}):
        return jsonify({'message': 'Username already exists!'}), 400

    # Hash password before saving it
    hashed_password = generate_password_hash(password)

    # Save user to database
    user = {'username': username, 'password': hashed_password}
    users_collection.insert_one(user)

    return jsonify({'message': 'User created successfully!'}), 201

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if username exists
    user = users_collection.find_one({'username': username})
    if not user:
        return jsonify({'message': 'User not found!'}), 404

    # Check password
    if not check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid password!'}), 401

    return jsonify({'message': 'Login successful!'}), 200

if __name == '__main':
    app.run(debug=True)