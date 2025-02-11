from flask import Blueprint, jsonify

product_bp = Blueprint('product', __name__)

# Common Components
def header():
    return {"header": "E-Commerce App Header"}

def footer():
    return {"footer": "E-Commerce App Footer"}

def navbar():
    return {"navbar": ["Home", "Products", "Cart", "Orders"]}

def feature():
    return {"feature": "Product Features"}

@product_bp.route('/')
def get_products():
    products = [
        {"id": 1, "name": "Product 1", "price": 100},
        {"id": 2, "name": "Product 2", "price": 200},
    ]
    return jsonify({
        "products": products,
        "header": header(),
        "navbar": navbar(),
        "feature": feature(),
        "footer": footer(),
    })
