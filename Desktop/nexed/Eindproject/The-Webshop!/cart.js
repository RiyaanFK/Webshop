document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cartItems');
  const totalPriceEl = document.getElementById('totalPrice');
  let total = 0;

  cartItems.forEach(item => {
    total += item.price;

    const div = document.createElement('div');
    div.classList.add('product-card');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} bits</p>
    `;
    cartList.appendChild(div);
  });

  totalPriceEl.textContent = `Totaal: ${total} bits`;
});

function placeOrder() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) return alert("Winkelwagen is leeg!");

  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push({
    id: Date.now(),
    items: cart,
    date: new Date().toLocaleString()
  });

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.removeItem('cart');

  document.getElementById('confirmation').textContent = '✅ Bestelling geplaatst!';
  document.getElementById('cartItems').innerHTML = '';
  document.getElementById('totalPrice').textContent = '';
}

function clearCart() {
  localStorage.removeItem('cart');
  location.reload();
}
