import bcrypt
from config import db, app
from models import User, Tenant, Admin, Payment, Property, MaintenanceRequest
from datetime import datetime
from sqlalchemy.exc import IntegrityError

# Function to hash a password
def hash_password(password):
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

# Create all tables
def seed():
    with app.app_context():
        # Clear existing data
        db.session.query(User).delete()
        db.session.query(Tenant).delete()
        db.session.query(Admin).delete()
        db.session.query(Payment).delete()
        db.session.query(Property).delete()
        db.session.query(MaintenanceRequest).delete()

        # Seed users
        users = [
            User(full_name=f"User {i+1}", email=f"user{i+1}@example.com", phone_number=f"{1234567890+i}", _password_hash=hash_password(f"Password@{125+i}"), profile_picture=f"user{i+1}.jpg", role="tenant" if i % 2 == 0 else "admin")
            for i in range(15)
        ]
        db.session.add_all(users)

        # Seed tenants
        tenants = [
            Tenant(house_number=f"A10{i}", user=users[i], property_id=(i % 5) + 1)
            for i in range(15) if users[i].role == "tenant"
        ]
        db.session.add_all(tenants)

        # Seed admins
        admins = [
            Admin(user=users[i])
            for i in range(15) if users[i].role == "admin"
        ]
        db.session.add_all(admins)

        # Seed properties
        properties = [
            Property(name=f"Property {i+1}", location=f"{i+1} Main St", image=f"property{i+1}.jpg", admin=admins[i % len(admins)])
            for i in range(15)
        ]
        db.session.add_all(properties)

        # Seed payments
        payments = [
            Payment(date_payed=datetime.utcnow(), amount=500 + i*10, amount_due=1500 - i*10, user=users[i], tenant=tenants[i % len(tenants)], admin=admins[i % len(admins)])
            for i in range(15)
        ]
        db.session.add_all(payments)

        # Seed maintenance requests
        maintenance_requests = [
            MaintenanceRequest(issue_type="Plumbing", description=f"Leaking sink in the kitchen {i}", date_created=datetime.utcnow(), tenant=tenants[i % len(tenants)], admin=admins[i % len(admins)])
            if i % 2 == 0 else
            MaintenanceRequest(issue_type="Electrical", description=f"Light switch not working {i}", date_created=datetime.utcnow(), tenant=tenants[i % len(tenants)], admin=admins[i % len(admins)])
            for i in range(15)
        ]
        db.session.add_all(maintenance_requests)

        try:
            # Commit all changes
            db.session.commit()
            print("Database seeded with new data!")
        except IntegrityError:
            db.session.rollback()
            print("Integrity error occurred. Database rollback.")

if __name__ == '__main__':
    seed()
