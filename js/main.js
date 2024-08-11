const url = 'https://openmarket.weniv.co.kr/products/';

async function fetchProducts(page = 1) {
  try {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();
    console.log(data.results);
    products(data.results);
  } catch (error) {
    console.error('error', error);
  }
}

function products(products) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
    <a href="#">
            <img src="${product.image}" alt="${product.product_name}">
            <p>${product.store_name}</p>
            <h2>${product.product_name}</h2>
            <p class="price">${product.price} 원</p>
            </a>
      `;

    container.appendChild(productElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});
