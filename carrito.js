let carrito = [];

// Función para agregar un producto al carrito
function addToCart(id, nombre, precio) {
    const producto = { id, nombre, precio };
    carrito.push(producto);
    updateCartCount();
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const carritoCount = document.getElementById('carrito-count');
    carritoCount.textContent = carrito.length;
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = ''; // Limpiar el contenedor
    let total = 0;

    carrito.forEach(item => {
        const divItem = document.createElement('div');
        divItem.classList.add('item-carrito');
        divItem.innerHTML = `
            <p>${item.nombre} - $${item.precio.toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(divItem);
        total += item.precio;
    });

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    carrito = carrito.filter(item => item.id !== id);
    mostrarCarrito(); // Actualizar la visualización del carrito
    updateCartCount(); // Actualizar el contador del carrito
}

// Llamada a la función para mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);
