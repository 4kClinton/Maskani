from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from config import config
from models import db, User, Tenant, Payment, Property
import datetime

app = Flask(__name__)
app.config.from_object(config)

db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)

# API Resources
class UserResource(Resource):
    def get(self):
        users = User.query.all()
        return jsonify([user.to_dict() for user in users])

    def post(self):
        data = request.json
        try:
            new_user = User(
                full_name=data['full_name'],
                email=data['email'],
                phone_number=data['phone_number'],
                password=data['password']
            )
            db.session.add(new_user)
            db.session.commit()
            return jsonify(new_user.to_dict())
        except Exception as e:
            return {'error': str(e)}, 400

class TenantResource(Resource):
    def get(self):
        tenants = Tenant.query.all()
        return jsonify([tenant.to_dict() for tenant in tenants])

    def post(self):
        data = request.json
        try:
            new_tenant = Tenant(
                name=data['name'],
                number=data['number'],
                id_number=data['id_number'],
                house_number=data['house_number'],
                user_id=data['user_id']
            )
            db.session.add(new_tenant)
            db.session.commit()
            return jsonify(new_tenant.to_dict())
        except Exception as e:
            return {'error': str(e)}, 400

class PaymentResource(Resource):
    def get(self):
        payments = Payment.query.all()
        return jsonify([payment.to_dict() for payment in payments])

    def post(self):
        data = request.json
        try:
            new_payment = Payment(
                date_payed=datetime.datetime.strptime(data['date_payed'], '%Y-%m-%d %H:%M:%S'),
                amount=data['amount'],
                amount_due=data['amount_due'],
                user_id=data['user_id']
            )
            db.session.add(new_payment)
            db.session.commit()
            return jsonify(new_payment.to_dict())
        except Exception as e:
            return {'error': str(e)}, 400

class PropertyResource(Resource):
    def get(self):
        properties = Property.query.all()
        return jsonify([property.to_dict() for property in properties])

    def post(self):
        data = request.json
        try:
            new_property = Property(
                name=data['name'],
                location=data['location'],
                owner=data['owner']
            )
            db.session.add(new_property)
            db.session.commit()
            return jsonify(new_property.to_dict())
        except Exception as e:
            return {'error': str(e)}, 400

# Add API routes
api.add_resource(UserResource, '/users')
api.add_resource(TenantResource, '/tenants')
api.add_resource(PaymentResource, '/payments')
api.add_resource(PropertyResource, '/properties')

if __name__ == '__main__':
    app.run(debug=True)
