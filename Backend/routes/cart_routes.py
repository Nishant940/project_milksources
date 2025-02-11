from flask import Blueprint, request, jsonify
from models.cart_model import Cart
from app import db

cart_bp = Blueprint('cart_bp', __name__)

@cart_bp.route('/add', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    cart_item = Cart(**data)
    db.session.add(cart_item)
    db.session.commit()
    return jsonify({'message': 'Item added to cart'})
