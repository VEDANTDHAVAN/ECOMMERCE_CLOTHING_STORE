from flask import Flask, jsonify, request, send_from_directory
from db import get_connection
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
conn = get_connection()

def parse_images(image_str):
    base_url = "http://localhost:5000/images"  # Adjust if using S3
    return [f"{base_url}/{img}" for img in image_str.split("|")]

@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('images', filename)

@app.route('/products', methods=['GET'])
def get_products():
    cur = conn.cursor()

    # Query params
    category = request.args.get('category')
    subCategory = request.args.get('subCategory')
    search = request.args.get('search')
    min_price = request.args.get('minPrice')
    max_price = request.args.get('maxPrice')
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 60))
    offset = (page - 1) * limit

    # Build query dynamically
    query = "SELECT * FROM products WHERE TRUE"
    params = []

    if category:
        query += " AND category = %s"
        params.append(category)

    if subCategory:
        query += " AND subCategory = %s"
        params.append(subCategory)

    if search:
        query += " AND (LOWER(name) LIKE %s OR LOWER(description) LIKE %s)"
        keyword = f"%{search.lower()}%"
        params.extend([keyword, keyword])

    if min_price:
        query += " AND price >= %s"
        params.append(min_price)

    if max_price:
        query += " AND price <= %s"
        params.append(max_price)

    query += " ORDER BY date DESC LIMIT %s OFFSET %s"
    params.extend([limit, offset])

    # Execute and return results
    cur.execute(query, params)
    rows = cur.fetchall()
    columns = [desc[0] for desc in cur.description]

    products = []
    for row in rows:
        data = dict(zip(columns, row))
        data['images'] = parse_images(data['image'])
        products.append(data)

    cur.close()
    return jsonify(products)


@app.route('/products/<product_id>', methods=['GET'])
def get_product(product_id):
    cur = conn.cursor()
    cur.execute("SELECT * FROM products WHERE _id = %s", (product_id,))
    row = cur.fetchone()
    if not row:
        return jsonify({"error": "Product not found"}), 404

    columns = [desc[0] for desc in cur.description]
    product = dict(zip(columns, row))
    product['images'] = parse_images(product['image'])
    cur.close()
    return jsonify(product)

@app.route('/products/count', methods=['GET'])
def get_product_count():
    cur = conn.cursor()
    cur.execute("SELECT COUNT(*) FROM products")
    count = cur.fetchone()[0]
    cur.close()
    return jsonify({"count": count})

@app.route('/chat', methods=['POST'])
def chatbot():
    data = request.get_json()
    message = data.get('message', '').lower()
    user_id = data.get('user_id', 'guest')

    # log the message
    cur = conn.cursor()
    cur.execute("""
       INSERT INTO chat_logs (user_id, message)
       VALUES (%s, %s)
     """, (user_id, message))

    category = None
    subCategory = None
    min_price = None
    max_price = None

    # Match keywords
    if re.search(r'\bwomen\b', message, re.IGNORECASE):
     category = 'Women'
    elif re.search(r'\bmen\b', message, re.IGNORECASE):
     category = 'Men'
    elif re.search(r'\b(kids?|children)\b', message, re.IGNORECASE):
     category = 'Kids'


    if 'topwear' in message or 't-shirt' in message or 'shirt' in message:
        subCategory = 'Topwear'
    elif 'bottomwear' in message or 'jeans' in message or 'trousers' in message:
        subCategory = 'Bottomwear'

    # Match price
    max_price_match = re.search(r'(under|below|less than)\s*₹?(\d+)', message)
    if max_price_match:
        max_price = int(max_price_match.group(2))
    
    min_price_match = re.search(r'(above|higher|more than)\s*₹?(\d+)', message)
    if min_price_match:
        min_price = int(min_price_match.group(2))
    # Build SQL
    query = "SELECT * FROM products WHERE TRUE"
    params = []

    if category:
        query += " AND category = %s"
        params.append(category)

    if subCategory:
        query += " AND subCategory = %s"
        params.append(subCategory)

    if max_price:
        query += " AND price <= %s"
        params.append(max_price)

    if min_price:
        query += " AND price >= %s"
        params.append(min_price)

    query += " ORDER BY date DESC LIMIT 10"

    cur = conn.cursor()
    cur.execute(query, params)
    rows = cur.fetchall()
    columns = [desc[0] for desc in cur.description]
    cur.close()

    # Format output
    products = []
    for row in rows:
        product = dict(zip(columns, row))
        product['images'] = parse_images(product['image'])
        products.append(product)

    # Fallback message
    if not products:
        return jsonify({"message": "Sorry, no products matched your request."})

    return jsonify({"products": products})

@app.route('/chat-logs', methods=['GET'])
def get_chat_logs():
    cur = conn.cursor()
    cur.execute("""
        SELECT * FROM chat_logs
        ORDER BY timestamp DESC
        LIMIT 20
    """)
    rows = cur.fetchall()
    columns = [desc[0] for desc in cur.description]
    logs = [dict(zip(columns, row)) for row in rows]
    cur.close()
    return jsonify(logs)


@app.route('/chat-logs/<user_id>', methods=['GET'])
def get_user_chat_logs(user_id):
    cur = conn.cursor()
    cur.execute("""
        SELECT * FROM chat_logs
        WHERE user_id = %s
        ORDER BY timestamp DESC
        LIMIT 20
    """, (user_id,))
    rows = cur.fetchall()
    columns = [desc[0] for desc in cur.description]
    logs = [dict(zip(columns, row)) for row in rows]
    cur.close()
    return jsonify(logs)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
