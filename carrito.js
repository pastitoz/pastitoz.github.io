// carrito.js

// Variable para almacenar los productos en el carrito
let carrito = [];

// Función para añadir un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('productos-carrito');
    contenedorCarrito.innerHTML = '';  // Limpiamos el contenedor

    let total = 0;
    carrito.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
        `;
        contenedorCarrito.appendChild(divProducto);
        total += producto.precio;
    });

    // Actualizamos el total del carrito
    const totalPrecio = document.getElementById('total-precio');
    totalPrecio.textContent = total.toFixed(2);
}

// Escuchamos el evento de clic en los botones "Añadir al carrito"
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-add-to-cart')) {
        const producto = {
            nombre: event.target.parentElement.querySelector('h4').textContent,
            precio: parseFloat(event.target.parentElement.querySelector('p').textContent.replace('Precio: $', '')),
            imagen: event.target.parentElement.querySelector('img').src
        };
        agregarAlCarrito(producto);
    }
});
