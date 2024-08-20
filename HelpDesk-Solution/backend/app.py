from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite requisições de qualquer origem

# Exemplo de usuário e senha (não use isso em produção!)
fake_user = {'email': 'user@example.com', 'password': 'karol', 'role': 'admin'}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email == fake_user['email'] and password == fake_user['password']:
        return jsonify({'message': 'Login successful', 'role': fake_user['role']})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
