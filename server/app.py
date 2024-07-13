import random
from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from datetime import timedelta
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, User, Tenant, Payment


app  = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///maskani.db" # postgres
app.config["JWT_SECRET_KEY"] = "fsbdgfnhgvjnvhmvh"+str(random.randint(1,1000000000000)) 
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)
app.config["SECRET_KEY"] = "JKSRVHJVFBSRDFV"+str(random.randint(1,1000000000000))

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

#login
@app.route("/login", methods=["POST"])
def login():
  full_name = request.json.get('full_name', None)
  password = request.json.get('password', None)

  user = User.query.filter_by(full_name=full_name).first()
  if user and bcrypt.check_password_hash(user.password, password):
    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token": access_token}), 200
  else:
    return jsonify({"error": "Invalid credentials"}), 401
  
#Fetch current user
@app.route("/current_user", methods=["GET"])
@jwt_required()
def current_user():
  current_user_id =  get_jwt_identity()
  current_user = User.query.get(current_user_id)
  if current_user:
        return jsonify({"id":current_user.id, "full_name":current_user.full_name, "email":current_user.email}), 200
  else:
        jsonify({"error":"User not found"}), 404

#logout
BLACKLIST = set()
@jwt.token_in_blocklist_loader
def check_if_token_in_blocklist(jwt_header, decrypted_token):
    return decrypted_token['jti'] in BLACKLIST

@app.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    jti = get_jwt_identity()
    BLACKLIST.add(jti)
    return jsonify({"message": "Logged out"}), 200

#add user
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(full_name=data['full_name'], email=data['email'], phone_number =data['phone_number'], password=bcrypt.generate_password_hash( data['password'] ).decode("utf-8") ) 
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'success': 'User created successfully'}), 201

# Get single user
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify({'id': user.id, 'full_name': user.full_name, 'email': user.email, 'phone_number': user.phone_number})

# Update user
@app.route('/users/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()

    user.full_name = data['full_name']
    user.email = data['email']
    user.phone_number = data['phone_number']
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})

# Delete user
@app.route('/users/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

#Tenant
#add Tenant
@app.route('/tenants', methods=['POST'])
@jwt_required()
def create_tenant():
    data = request.get_json()
    new_tenant = Tenant(name=data['name'], phone_number=data['number'], id_number=data['id_number'], house_number=data['house_number'], user_id=get_jwt_identity()) 
    db.session.add(new_tenant)
    db.session.commit()
    return jsonify({'success': 'Tenant created successfully'}), 201

# Get single tenant
@app.route('/tenants/<int:tenant_id>', methods=['GET'])
@jwt_required()
def get_tenant(tenant_id):
    tenant = Tenant.query.get_or_404(tenant_id)
    return jsonify({'id': tenant.id, 'name': tenant.name, 'phone_number': tenant.phone_number, 'id_number': tenant.id_number, 'house_number': tenant.house_number, 'user_id': tenant.user_id})

# Update tenant
@app.route('/tenants/<int:tenant_id>', methods=['PUT'])
@jwt_required()
def update_tenant(tenant_id):
    tenant = Tenant.query.get_or_404(tenant_id)
    data = request.get_json()

    tenant.name = data['name']
    tenant.phone_number = data['phone_number']
    tenant.id_number = data['id_number']
    tenant.house_number = data['house_number']
    db.session.commit()
    return jsonify({'message': 'Tenant updated successfully'})

#Delete tenant
@app.route('/tenants/<int:tenant_id>', methods=['DELETE'])
@jwt_required()
def delete_tenant(tenant_id):
    tenant = Tenant.query.get_or_404(tenant_id)
    db.session.delete(tenant)
    db.session.commit()
    return jsonify({'message': 'Tenant deleted successfully'})

#Payment












if __name__ == "__main__":
    app.run(debug=True)

