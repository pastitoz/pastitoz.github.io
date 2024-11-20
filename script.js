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
                descripcion: 'Mini computadora para proyectos avanzados.',
                precio: 35.00,
                imagen: 'images/product2.jpg'
            }
        ]
    },
    {
        nombre: 'Sensores',
        productos: [
            {
                id: 3,
                nombre: 'Sensor de Temperatura',
                descripcion: 'Sensor de temperatura digital de alta precisión.',
                precio: 15.00,
                imagen: 'images/product3.jpg'
            },
            {
                id: 4,
                nombre: 'Sensor de Movimiento',
                descripcion: 'Detector de movimiento PIR.',
                precio: 10.00,
                imagen: 'images/product4.jpg'
            }
        ]
    }
];

// Array para almacenar los productos del carrito
let carrito = [];

// Función para mostrar productos destacados (solo 5) en la página de inicio
function mostrarProductosDestacados() {
    const contenedorProductos = document.getElementById('productos-destacados');
    let productosDestacados = [];
    categorias.forEach(categoria => {
        productosDestacados = productosDestacados.concat(categoria.productos);
    });
    // Limitar a 5 productos
    productosDestacados = productosDestacados.slice(0, 5);

    productosDestacados.forEach(producto => {
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
}

// Función para mostrar todas las categorías y sus productos en la página de categorías
function mostrarCategorias() {
    const contenedorCategorias = document.getElementById('categorias');
    categorias.forEach(categoria => {
        const divCategoria = document.createElement('div');
        divCategoria.classList.add('categoria');
        divCategoria.innerHTML = `
            <h3>${categoria.nombre}</h3>
            <div class="productos">
                ${categoria.productos.map(producto => `
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <p>Precio: $${producto.precio.toFixed(2)}</p>
                        <button onclick="añadirAlCarrito(${producto.id})">Añadir al carrito</button>
                    </div>
                `).join('')}
            </div>
        `;
        contenedorCategorias.appendChild(divCategoria);
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
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('index.html')) {
        mostrarProductosDestacados();
    }
    if (window.location.pathname.includes('categorias.html')) {
        mostrarCategorias();
    }
});

// Mostrar el carrito en la página de carrito
if (window.location.pathname.includes('carrito.html')) {
    mostrarCarrito();
}
