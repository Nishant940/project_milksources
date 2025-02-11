from flask import Blueprint, request, jsonify
from models.order_model import Order
from app import db

order_bp = Blueprint('order_bp', __name__)

@order_bp.route('/checkout', methods=['POST'])
def checkout():
    data = request.get_json()
    order = Order(**data)
    db.session.add(order)
    db.session.commit()
    return jsonify({'message': 'Order placed successfully'})
