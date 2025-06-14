// services/api.js
const BASE_URL = 'http://localhost:5000';

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

export async function sendChat(message) {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: 'guest', message }),
  });
  return res.json();
}
