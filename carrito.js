// Carrito global (persistente en localStorage)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];  // Obtener el carrito desde localStorage o inicializar vacío

// Función para agregar un producto al carrito
function addToCart(id, nombre, precio) {
    const productoExistente = carrito.find(item => item.id === id);  // Verificar si el producto ya está en el carrito
    if (productoExistente) {
        productoExistente.cantidad += 1;  // Aumentar cantidad si el producto ya está en el carrito
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });  // Si no está, agregarlo al carrito con cantidad 1
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar el carrito en localStorage
    updateCartCount();  // Actualizar el contador del carrito
    mostrarCarrito();  // Mostrar el carrito actualizado
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const carritoCount = document.getElementById('carrito-count');
    if (carritoCount) {
        carritoCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);  // Contar el total de productos en el carrito
    }
}

// Función para mostrar los productos en el carrito (en carrito.html)
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '';  // Limpiar contenedor
    let total = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>No hay productos en tu carrito.</p>';  // Si no hay productos, mostrar un mensaje
    } else {
        carrito.forEach(item => {
            const divItem = document.createElement('div');
            divItem.classList.add('item-carrito');
            divItem.innerHTML = `
                <p>${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}</p>
                <button onclick="removeFromCart(${item.id})">Eliminar</button>  <!-- Botón para eliminar el producto -->
            `;
            contenedorCarrito.appendChild(divItem);
            total += item.precio * item.cantidad;  // Calcular el total de la compra
        });
    }

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;  // Mostrar el total actualizado
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    carrito = carrito.filter(item => item.id !== id);  // Eliminar el producto del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar el carrito actualizado en localStorage
    updateCartCount();  // Actualizar el contador del carrito
    mostrarCarrito();  // Mostrar el carrito actualizado
}

// Función para finalizar la compra (puedes agregar un comportamiento aquí como redirigir a una página de pago)
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Añade productos antes de finalizar la compra.');
    } else {
        // Aquí podrías redirigir a una página de pago o mostrar un resumen de la compra
        alert('¡Gracias por tu compra!');
        carrito = [];  // Limpiar el carrito
        localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar el carrito vacío
        updateCartCount();  // Actualizar el contador del carrito
        mostrarCarrito();  // Actualizar la vista del carrito
    }
}

// Llamada a la función para mostrar el carrito cuando se carga la página carrito.html
document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito();  // Mostrar el carrito al cargar la página
    updateCartCount();  // Asegurarse de que el contador del carrito esté actualizado
});

// Llamada a la función para finalizar la compra al hacer clic en el botón
document.getElementById('btn-finalizar-compra')?.addEventListener('click', finalizarCompra);

// Asegurarse de que el carrito se actualice en la página de contacto
if (document.getElementById('carrito-count')) {
    document.addEventListener('DOMContentLoaded', function() {
        updateCartCount();  // Actualizar el contador del carrito en la página de contacto
    });
}


