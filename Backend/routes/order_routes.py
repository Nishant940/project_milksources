from flask import Blueprint, request, jsonify

order = Blueprint('order', __name__)

@order.route('/checkout', methods=['POST'])
def checkout():
    data = request.json
    cart_items = data.get('cart', [])

    if not cart_items:
        return jsonify({'message': 'Cart is empty'}), 400

    # यहाँ ऑर्डर डेटाबेस में सेव करें

    return jsonify({'message': 'Order placed successfully!'}), 201
