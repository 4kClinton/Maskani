from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required, get_jwt
from config import Config
from models import db, User, Tenant, Payment, Property
import datetime

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
api = Api(app)

# Blacklist to store revoked tokens
blacklist = set()

@jwt.token_in_blocklist_loader
def check_if_token_in_blacklist(jwt_header, jwt_payload):
    jti = jwt_payload['jti']
    return jti in blacklist

class Home(Resource):
    def get(self):
        return {"message": "Welcome to MuchInKenya"}

api.add_resource(Home, '/')

class UserResource(Resource):
    @jwt_required()
    def get(self, user_id=None):
        if user_id:
            user = User.query.get_or_404(user_id)
            return make_response(user.to_dict(), 200)
        users = User.query.all()
        return make_response([user.to_dict() for user in users], 200)

    def post(self):
        try:
            data = request.get_json()
            hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
            new_user = User(
                full_name=data['full_name'],
                email=data['email'],
                phone_number=data['phone_number'],
                password=hashed_password
            )
            db.session.add(new_user)
            db.session.commit()
            return make_response(new_user.to_dict(), 201)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def put(self, user_id):
        user = User.query.get_or_404(user_id)
        try:
            data = request.get_json()
            user.full_name = data['full_name']
            user.email = data['email']
            user.phone_number = data['phone_number']
            if 'password' in data:
                user.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
            db.session.commit()
            return make_response(user.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def delete(self, user_id):
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return make_response({"message": "User deleted successfully"}, 200)

api.add_resource(UserResource, '/users', '/users/<int:user_id>')

class TenantResource(Resource):
    @jwt_required()
    def get(self, tenant_id=None):
        if tenant_id:
            tenant = Tenant.query.get_or_404(tenant_id)
            return make_response(tenant.to_dict(), 200)
        tenants = Tenant.query.all()
        return make_response([tenant.to_dict() for tenant in tenants], 200)

    @jwt_required()
    def post(self):
        try:
            data = request.get_json()
            new_tenant = Tenant(
                name=data['name'],
                number=data['number'],
                id_number=data['id_number'],
                house_number=data['house_number'],
                user_id=data['user_id']
            )
            db.session.add(new_tenant)
            db.session.commit()
            return make_response(new_tenant.to_dict(), 201)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def put(self, tenant_id):
        tenant = Tenant.query.get_or_404(tenant_id)
        try:
            data = request.get_json()
            tenant.name = data['name']
            tenant.number = data['number']
            tenant.id_number = data['id_number']
            tenant.house_number = data['house_number']
            tenant.user_id = data['user_id']
            db.session.commit()
            return make_response(tenant.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def delete(self, tenant_id):
        tenant = Tenant.query.get_or_404(tenant_id)
        db.session.delete(tenant)
        db.session.commit()
        return make_response({"message": "Tenant deleted successfully"}, 200)

api.add_resource(TenantResource, '/tenants', '/tenants/<int:tenant_id>')

class PaymentResource(Resource):
    @jwt_required()
    def get(self, payment_id=None):
        if payment_id:
            payment = Payment.query.get_or_404(payment_id)
            return make_response(payment.to_dict(), 200)
        payments = Payment.query.all()
        return make_response([payment.to_dict() for payment in payments], 200)

    @jwt_required()
    def post(self):
        try:
            data = request.get_json()
            new_payment = Payment(
                date_payed=datetime.datetime.strptime(data['date_payed'], '%Y-%m-%d %H:%M:%S'),
                amount=data['amount'],
                amount_due=data['amount_due'],
                user_id=data['user_id']
            )
            db.session.add(new_payment)
            db.session.commit()
            return make_response(new_payment.to_dict(), 201)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def put(self, payment_id):
        payment = Payment.query.get_or_404(payment_id)
        try:
            data = request.get_json()
            payment.date_payed = datetime.datetime.strptime(data['date_payed'], '%Y-%m-%d %H:%M:%S')
            payment.amount = data['amount']
            payment.amount_due = data['amount_due']
            payment.user_id = data['user_id']
            db.session.commit()
            return make_response(payment.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def delete(self, payment_id):
        payment = Payment.query.get_or_404(payment_id)
        db.session.delete(payment)
        db.session.commit()
        return make_response({"message": "Payment deleted successfully"}, 200)

api.add_resource(PaymentResource, '/payments', '/payments/<int:payment_id>')

class PropertyResource(Resource):
    @jwt_required()
    def get(self, property_id=None):
        if property_id:
            property = Property.query.get_or_404(property_id)
            return make_response(property.to_dict(), 200)
        properties = Property.query.all()
        return make_response([property.to_dict() for property in properties], 200)

    @jwt_required()
    def post(self):
        try:
            data = request.get_json()
            new_property = Property(
                name=data['name'],
                location=data['location'],
                owner=data['owner']
            )
            db.session.add(new_property)
            db.session.commit()
            return make_response(new_property.to_dict(), 201)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def put(self, property_id):
        property = Property.query.get_or_404(property_id)
        try:
            data = request.get_json()
            property.name = data['name']
            property.location = data['location']
            property.owner = data['owner']
            db.session.commit()
            return make_response(property.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    @jwt_required()
    def delete(self, property_id):
        property = Property.query.get_or_404(property_id)
        db.session.delete(property)
        db.session.commit()
        return make_response({"message": "Property deleted successfully"}, 200)

api.add_resource(PropertyResource, '/properties', '/properties/<int:property_id>')

class LoginResource(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(email=data.get('email')).first()
        if user and bcrypt.check_password_hash(user.password, data.get('password')):
            access_token = create_access_token(identity=user.id)
            return make_response({"access_token": access_token}, 200)
        return make_response({"error": "Invalid email or password"}, 401)

api.add_resource(LoginResource, '/login')

class LogoutResource(Resource):
    @jwt_required()
    def post(self):
        jti = get_jwt()['jti']
        blacklist.add(jti)
        return make_response({"message": "Successfully logged out"}, 200)

api.add_resource(LogoutResource, '/logout')

class CurrentUserResource(Resource):
    @jwt_required()
    def get(self):
        current_user_id = get_jwt_identity()
        user = User.query.get_or_404(current_user_id)
        return make_response(user.to_dict(), 200)

api.add_resource(CurrentUserResource, '/current_user')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
