from Backend.app import db

class Cart(db.Model):
    __tablename__ = 'cart'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id', ondelete='CASCADE'))
    quantity = db.Column(db.Integer)

    user = db.relationship('User', back_populates='carts')
    product = db.relationship('Product', back_populates='carts')
