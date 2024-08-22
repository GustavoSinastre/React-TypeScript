from app import app, db, User
from werkzeug.security import generate_password_hash

def init_db():
    # Cria o contexto de aplicativo
    with app.app_context():
        # Cria as tabelas
        db.create_all()

        # Dados fixos
        users = [
            {'email': 'admin@example.com', 'password': 'adminpassword', 'role': 'admin'},
            {'email': 'user@example.com', 'password': 'userpassword', 'role': 'user'}
        ]

        # Adiciona os usuários ao banco de dados
        for user in users:
            if not User.query.filter_by(email=user['email']).first():
                hashed_password = generate_password_hash(user['password'])
                new_user = User(email=user['email'], password=hashed_password, role=user['role'])
                db.session.add(new_user)
        
        # Comita as alterações
        db.session.commit()

if __name__ == '__main__':
    init_db()
