from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
import re

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    payments = db.relationship('Payment', back_populates='user', cascade='all, delete-orphan')
    serialize_rules = ('-payments.user',)

    @validates('full_name')
    def validate_full_name(self, key, full_name):
        if not full_name:
            raise ValueError("Full name must be provided")
        elif User.query.filter(User.full_name == full_name).first():
            raise ValueError("Full name must be unique")
        return full_name

    @validates('email')
    def validate_email(self, key, email):
        if not email:
            raise ValueError("Email must be provided")
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_pattern, email):
            raise ValueError("Invalid email address")
        return email

    @validates('phone_number')
    def validate_phone_number(self, key, phone_number):
        digits = ''.join(filter(str.isdigit, phone_number))
        if len(digits) != 10:
            raise ValueError("Phone number must be 10 digits")
        return phone_number

    @validates('password')
    def validate_password(self, key, password):
        if not password:
            raise ValueError("Password cannot be empty")
        password_pattern = r'^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
        if not re.match(password_pattern, password):
            raise ValueError("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character")
        return password

    def to_dict(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'email': self.email,
            'phone_number': self.phone_number,
            'payments': [payment.to_dict() for payment in self.payments]
        }

    def __repr__(self):
        return f'<User {self.id} - {self.full_name}>'

class Tenant(db.Model, SerializerMixin):
    __tablename__ = 'tenants'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    number = db.Column(db.Integer, nullable=False)
    id_number = db.Column(db.Integer, nullable=False)
    house_number = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    user = db.relationship('User', back_populates='tenants', cascade='all, delete-orphan')

    serialize_rules = ('-user.tenants',)

    @validates('name')
    def validate_name(self, key, name):
        if not name or len(name) > 100:
            raise ValueError("Name must be between 1 and 100 characters long")
        return name

    @validates('number', 'id_number', 'house_number', 'user_id')
    def validate_numbers(self, key, value):
        if value < 1 or value > 9999999999:
            raise ValueError(f"{key.capitalize()} must be between 1 and 9999999999")
        return value

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'number': self.number,
            'id_number': self.id_number,
            'house_number': self.house_number,
            'user_id': self.user_id
        }

    def __repr__(self):
        return f'<Tenant {self.id}, {self.name}, {self.number}>'

class Payment(db.Model, SerializerMixin):
    __tablename__ = 'payments'

    id = db.Column(db.Integer, primary_key=True)
    date_payed = db.Column(db.DateTime, nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    amount_due = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates='payments', cascade='all, delete-orphan')
    serialize_rules = ('-user.payments',)

    def to_dict(self):
        return {
            'id': self.id,
            'date_payed': self.date_payed,
            'amount': self.amount,
            'amount_due': self.amount_due,
            'user_id': self.user_id
        }

    def __repr__(self):
        return f'<Payment {self.id} - {self.date_payed}>'

class Property(db.Model, SerializerMixin):
    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    owner = db.Column(db.String, nullable=False)
    payments = db.relationship('Payment', back_populates='property', cascade='all, delete-orphan')
    serialize_rules = ('-payments.property',)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'location': self.location,
            'owner': self.owner,
            'payments': [payment.to_dict() for payment in self.payments]
        }

    def __repr__(self):
        return f'<Property {self.id} - {self.name}>'
