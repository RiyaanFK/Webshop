document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('productList');
  const cartCount = document.getElementById('cart-count');

  
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      localStorage.setItem('products', JSON.stringify(products));
      renderProducts(products);
    });

  
  function renderProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} bits</p>
        <button data-id="${product.id}">Toevoegen aan winkelwagen</button>
      `;
      productList.appendChild(card);
    });
  }

  productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const id = parseInt(e.target.getAttribute('data-id'));
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const product = products.find(p => p.id === id);
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      cartCount.textContent = cart.length;
    }
  });

  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount.textContent = currentCart.length;
});
