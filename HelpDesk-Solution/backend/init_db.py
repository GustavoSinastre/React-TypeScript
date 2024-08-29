from app import app, db, User
from werkzeug.security import generate_password_hash
from datetime import datetime, timezone

def init_db():
    # Cria o contexto de aplicativo
    with app.app_context():
        # Cria as tabelas
        db.create_all()

        # Dados fixos
        users = [
            {
                'email': 'admin@example.com',
                'password': 'adminpassword',
                'role': 'admin',
                'fullname': 'ADMIN USER',
                'group': 'ADMIN',
                'manager': 'GERENTE',
                'created_at': datetime.now(timezone.utc)
            },
            {
                'email': 'user1@example.com',
                'password': 'userpassword',
                'role': 'user',
                'fullname': 'USER USER 1',
                'group': 'OPERATION',
                'manager': 'GERENTE 1',
                'created_at': datetime.now(timezone.utc)
            },
            {
                'email': 'user2@example.com',
                'password': 'userpassword',
                'role': 'user',
                'fullname': 'USER USER 2',
                'group': 'FIELD',
                'manager': 'GERENTE 2',
                'created_at': datetime.now(timezone.utc)
            }
        ]

        # Adiciona os usuários ao banco de dados
        for user in users:
            if not User.query.filter_by(email=user['email']).first():
                hashed_password = generate_password_hash(user['password'])
                new_user = User(
                    email=user['email'],
                    password=hashed_password,
                    role=user['role'],
                    fullname=user['fullname'],
                    group=user['group'],
                    manager=user['manager'],
                    created_at=user['created_at']
                )
                db.session.add(new_user)

        # Comita as alterações
        db.session.commit()

if __name__ == '__main__':
    init_db()
