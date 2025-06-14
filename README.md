# 🛍️ E-Commerce Clothing Website with Chatbot Integration

This project is a full-stack E-Commerce clothing website featuring real product data from PostgreSQL, dynamic product rendering, shopping cart functionality, and a chatbot-powered search feature. It uses a React frontend and a Flask + PostgreSQL backend, with complete integration between components.

---

## 📦 Features

### 👕 E-Commerce Website

* Dynamic product display from PostgreSQL
* Product categories: Men, Women, Kids
* Size and price filtering
* Add to Cart, Update Quantity, Checkout flow
* Product images served via Flask static hosting
* 3D Canvas Route to Customize your Shirts with your choice of color as well as design.

### 🤖 Chatbot Search

* Natural language chatbot integrated on frontend
* Searches products using user queries like:

  * "Show me men t-shirts under 500"
  * "I want kids winterwear below 300"
* Backend NLP logic parses category, subCategory, price, and returns results
* Chat logs saved in PostgreSQL

---

## 🧰 Tech Stack

| Layer      | Tech Used                      |
| ---------- | ------------------------------ |
| Frontend   | React.js (Vite)  & Three.js    |
| Backend    | Flask + Flask-CORS             |
| Database   | PostgreSQL                     |
| Chat Logic | Regex-based NLP parsing        |
| Storage    | Local images or CDN (optional) |

---

## 🚀 Project Structure

```
📁 client/               # React frontend
│   ├── src/assets/     # Image assets
│   ├── src/components/ # Product and Chat UI
│   └── src/context/    # ShopContextProvider

📁 flask-api/               # Flask backend
│   ├── app.py          # Main Flask app
│   ├── db.py           # PostgreSQL connector
│   ├── /images/        # Product images
│   └── chat_logs.sql   # Schema for chatbot logs

📄 insert_products_from_assets.sql   # Inserts 52+ product records
```

---

## ⚙️ Setup Instructions

### 📁 1. Clone the Repo

```bash
git clone https://github.com/VEDANTDHAVAN/ECOMMERCE_CLOTHING_STORE
```

### 🐘 2. Set Up PostgreSQL

* Install PostgreSQL (v14+)
* Create database:

```sql
CREATE DATABASE clothing_store;
```

* Load schema and product data:

```bash
psql -U postgres -d clothing_store -f insert_products_from_assets.sql
```

### 🔥 3. Run Flask Backend

```bash
cd server
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

* Runs on: `http://localhost:5000`

### 🧑‍💻 4. Run React Frontend

```bash
cd client
npm install
npm run dev
```

* Runs on: `http://localhost:5173`

Ensure images are served from `server/images/` or use full public URLs.

---

## 🤖 Chatbot Endpoint

* **POST /chat**

```json
{
  "user_id": "guest",
  "message": "Show me kids topwear under 300"
}
```

Returns filtered products based on parsed intent.

---

## 🧾 Project Summary

This E-Commerce Clothing Website provides a complete buying experience including:

* Category filtering
* Size and price selection
* Real product storage in PostgreSQL
* Clean React frontend UI
* Chatbot-powered product search
* 3D Canvas for Customization of Shirts with interactive UI/UX.

Perfect for showcasing full-stack capability, database integration, and natural language feature implementation.

---

## 📬 Contributions

Feel free to fork and improve the chatbot logic (e.g., integrate OpenAI, spaCy) or extend the admin dashboard.

---

## 🛡️ License

This project is licensed under the MIT License.
