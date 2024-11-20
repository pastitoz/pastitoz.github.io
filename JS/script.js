// script.js

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { name: productName, price: productPrice };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} ha sido agregado al carrito.`);
}

// Función para mostrar los productos del carrito
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.carrito');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        return;
    }

    let cartHTML = '';
    cart.forEach((product, index) => {
        cartHTML += `
            <div class="producto-carrito">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;

    const total = cart.reduce((sum, product) => sum + product.price, 0);
    cartContainer.innerHTML += `<div class="total"><p>Total: $${total}</p><button>Confirmar compra</button></div>`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Mostrar carrito al cargar la página
if (window.location.href.includes('cart.html')) {
    displayCart();
}

// Asignar eventos de añadir al carrito en la página de productos
document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.parentElement.querySelector('h3').textContent;
        const productPrice = parseFloat(e.target.parentElement.querySelector('p').textContent.replace('Precio: $', ''));
        addToCart(productName, productPrice);
    });
});

