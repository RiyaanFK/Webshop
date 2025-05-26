  document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const imageInput = document.getElementById('image');
    const productList = document.getElementById('productList');
  
    let products = JSON.parse(localStorage.getItem('products')) || [];
  
    function renderList() {
      productList.innerHTML = '';
      products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${product.name} - ${product.price} bits
          <button data-index="${index}" class="delete-btn">Verwijder</button>
        `;
        productList.appendChild(li);
      });
    }
  
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProduct = {
        id: Date.now(),
        name: nameInput.value,
        price: parseFloat(priceInput.value),
        image: imageInput.value
      };
      products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(products));
      renderList();
      productForm.reset();
    });
  
    productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderList();
      }
    });
  
    renderList();
  });
  