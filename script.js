// Array de categorías y productos
const categorias = [
    {
        nombre: 'Tarjetas de Programación',
        productos: [
            {
                id: 1,
                nombre: 'Arduino Uno',
                descripcion: 'Controlador microcontrolador versátil para proyectos electrónicos.',
                precio: 25.00,
                imagen: 'images/product1.jpg'
            },
            {
                id: 2,
                nombre: 'Raspberry Pi 4',
                descripcion: 'Computadora de placa reducida para proyectos de programación.',
                precio: 35.00,
                imagen: 'images/product2.jpg'
            },
            {
                id: 3,
                nombre: 'ESP32',
                descripcion: 'Módulo WiFi y Bluetooth para proyectos IoT.',
                precio: 20.00,
                imagen: 'images/product3.jpg'
            }
        ]
    }
];

// Array para almacenar los productos del carrito
let carrito = [];

// Función para mostrar productos destacados
function mostrarProductosDestacados() {
    const contenedorProductos = document.getElementById('productos-destacados');
    categorias.forEach(categoria => {
        categoria.productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button onclick="añadirAlCarrito(${producto.id})">Añadir al carrito</button>
            `;
            contenedorProductos.appendChild(divProducto);
        });
    });
}

// Función para añadir productos al carrito
function añadirAlCarrito(productId) {
    const producto = encontrarProductoPorId(productId);
    carrito.push(producto);
    actualizarContadorCarrito();
}

// Función para encontrar un producto por su ID
function encontrarProductoPorId(productId) {
    for (let categoria of categorias) {
        for (let producto of categoria.productos) {
            if (producto.id === productId) {
                return producto;
            }
        }
    }
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const carritoCount = document.getElementById('carrito-count');
    carritoCount.textContent = carrito.length;
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = ''; // Limpiar el carrito antes de mostrarlo
    carrito.forEach((producto, index) => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(divProducto);
    });
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
    actualizarContadorCarrito();
}

// Función para abrir el modal de pago
function abrirModalPago() {
    const modal = document.getElementById('qr-container');
    modal.style.display = 'block';
}

// Función para cerrar el modal de pago
function cerrarModalPago() {
    const modal = document.getElementById('qr-container');
    modal.style.display = 'none';
}

// Función de pago (al hacer clic en el botón de checkout)
document.getElementById('checkout-btn').addEventListener('click', () => {
    abrirModalPago();
});

// Mostrar productos al cargar la página
document.addEventListener('DOMContentLoaded', mostrarProductosDestacados);

// Mostrar el carrito en la página de carrito
if (window.location.pathname.includes('carrito.html')) {
    mostrarCarrito();
}
