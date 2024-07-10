from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

from sqlalchemy.orm import validates
import datetime
import re

db = SQLAlchemy()

#models
class User(db.model, SerializerMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  full_name = db.column(db.String, nullable=False)
  email = db.column(db.String, nullable=False)
  phone_number = db.column(db.integer, nullable=False)
  password = db.column(db.String, nullable=False)
  payments = db.relationship('payments', back_populates = 'users', cascades = 'all, delete-orphan')
  serialize_rules = ('payments.users')

@validates('full_name')
def validates_full_name(self, key,  full_name):
  if not full_name:
      raise ValueError("Full name must be provided")
  elif User.query.filter(User.full_name == full_name).first():
      raise ValueError("Full name must be unique")
  return full_name

@validates('email')
def validates_email(self,key, email):
  if not email:
      raise ValueError("Email must be provided")
  
  # A regex pattern for a valid email
  email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

  if not re.match(email_pattern, email):
      raise ValueError("Invalid email address")
  return email

@validates("phone_number")
def validate_phone_number(self, key, value):
    digits = 0
    for i in value:
        if i.isdigit():
            digits+=1
    if digits !=  10:
        raise ValueError("Number must be 10 digits")
    return value

@validates('password')
def validates_password(self, key, password):
  if not password:
     raise ValueError("Password cannot be empty")
  
  #A regex pattern for a valid password
  password_pattern = r'^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'

  if not re.match(password_pattern, password):
    raise ValueError("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character")
  return password


def __repr__(self):
    return f'<User {self.id} - {self.full_name}>'

class Payment(db.Model, SerializerMixin):
   __tablename__ = 'payments'

   id = db.Column(db.Integer, primary_key=True)
   date_payed = db.Column(db.datetime, nullable=False)
   amount = db.Column(db.Integer, nullable=False)
   amount_due = db.Column(db.Integer, nullable=False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   users = db.relationship('users', back_populates = 'payments', cascades = 'all, delete-orphan')
   serialize_rules = ('-users.payments',) 

   def __repr__(self):
      return f'<Payment {self.id} - {self.date_payed}>'
      
class Property(db.Model):
   __tablename__= 'properties'
   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String ,nullable=False)
  #  address = db.Column(db.String, nullable=False)
   location = db.Column(db.String, nullable=False)
   owner = db.Column(db.String, nullable=False)
   payments = db.relationship('Payment', back_populates='properties',  cascades = 'all, delete-orphan')
   serialize_rules = ('-payments.properties',)

   def __repr__(self):
      return f'<Property {self.id} - {self.name}>'
    
