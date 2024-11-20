// Array de categorías y productos
const categorias = [
    {
        nombre: 'Tarjetas de Programación',
        productos: [
            { id: 1, nombre: 'Arduino Uno', descripcion: 'Controlador microcontrolador versátil para proyectos electrónicos.', precio: 25.00, imagen: 'images/arduino-uno.jpg' },
            { id: 2, nombre: 'Raspberry Pi 4', descripcion: 'Computadora de placa reducida para proyectos de programación.', precio: 35.00, imagen: 'images/raspberry-pi-4.jpg' },
            { id: 3, nombre: 'ESP32', descripcion: 'Módulo WiFi y Bluetooth para proyectos IoT.', precio: 20.00, imagen: 'images/esp32.jpg' },
            { id: 4, nombre: 'BeagleBone Black', descripcion: 'Placa de desarrollo para proyectos avanzados.', precio: 45.00, imagen: 'images/beaglebone-black.jpg' },
            { id: 5, nombre: 'STM32', descripcion: 'Microcontrolador de 32 bits para proyectos electrónicos.', precio: 30.00, imagen: 'images/stm32.jpg' }
        ]
    },
    {
        nombre: 'Tecnología de Escritorio',
        productos: [
            { id: 6, nombre: 'Laptop Gaming', descripcion: 'Laptop potente para programación y juegos.', precio: 1200.00, imagen: 'images/laptop-gaming.jpg' },
            { id: 7, nombre: 'Monitor 4K', descripcion: 'Monitor de alta resolución para desarrollo.', precio: 400.00, imagen: 'images/monitor-4k.jpg' },
            { id: 8, nombre: 'Teclado Mecánico', descripcion: 'Teclado mecánico con retroiluminación RGB.', precio: 100.00, imagen: 'images/teclado-mecanico.jpg' },
            { id: 9, nombre: 'Mouse Gamer', descripcion: 'Mouse ergonómico con alta precisión.', precio: 50.00, imagen: 'images/mouse-gamer.jpg' },
            { id: 10, nombre: 'Docking Station', descripcion: 'Estación de acoplamiento para múltiples conexiones.', precio: 80.00, imagen: 'images/docking-station.jpg' }
        ]
    },
    {
        nombre: 'Equipos Inteligentes',
        productos: [
            { id: 11, nombre: 'Termostato Inteligente', descripcion: 'Controla la temperatura de tu hogar desde tu móvil.', precio: 150.00, imagen: 'images/termostato-inteligente.jpg' },
            { id: 12, nombre: 'Cámara de Seguridad', descripcion: 'Cámara de vigilancia con conexión WiFi.', precio: 100.00, imagen: 'images/camara-seguridad.jpg' },
            { id: 13, nombre: 'Bombilla Inteligente', descripcion: 'Controla la iluminación desde tu smartphone.', precio: 25.00, imagen: 'images/bombilla-inteligente.jpg' },
            { id: 14, nombre: 'Asistente Virtual', descripcion: 'Dispositivo para controlar tu hogar inteligente.', precio: 80.00, imagen: 'images/asistente-virtual.jpg' },
            { id: 15, nombre: 'Enchufe Inteligente', descripcion: 'Controla tus dispositivos desde cualquier lugar.', precio: 30.00, imagen: 'images/enchufe-inteligente.jpg' }
        ]
    },
    {
        nombre: 'Teléfonos Móviles',
        productos: [
            { id: 16, nombre: 'iPhone 15 Pro Max', descripcion: 'Teléfono premium con chip A17 Bionic y cámara de 48 MP.', precio: 1200.00, imagen: 'images/iphone-15-pro-max.jpg' },
            { id: 17, nombre: 'Samsung Galaxy S23 Ultra', descripcion: 'Smartphone con pantalla Dynamic AMOLED y cámara de 200 MP', precio: 1100.00, imagen: 'images/samsung-galaxy-s23-ultra.jpg' },
            { id: 18, nombre: 'Google Pixel 8 Pro', descripcion: 'Dispositivo con Android puro y herramientas avanzadas de IA.', precio: 1000.00, imagen: 'images/google-pixel-8-pro.jpg' },
            { id: 19, nombre: 'Xiaomi 13 Ultra', descripcion: 'Teléfono insignia con cámaras Leica y batería de larga duración.', precio: 900.00, imagen: 'images/xiaomi-13-ultra.jpg' },
            { id: 20, nombre: 'OnePlus 12', descripcion: 'Teléfono 5G con pantalla AMOLED y carga ultra rápida.', precio: 800.00, imagen: 'images/oneplus-12.jpg' }
        ]
    },
    {
        nombre: 'Ordenadores',
        productos: [
            { id: 21, nombre: 'Dell XPS 8950', descripcion: 'PC de escritorio de alto rendimiento para programación y diseño.', precio: 1600.00, imagen: 'images/dell-xps-8950.jpg' },
            { id: 22, nombre: 'MacBook Air M2', descripcion: 'Laptop ultraligera con el chip M2 para portabilidad y potencia.', precio: 1200.00, imagen: 'images/macbook-air-m2.jpg' },
            { id: 23, nombre: 'HP Envy 34 All-in-One', descripcion: 'Ordenador todo en uno con pantalla 5K ultrawide.', precio: 1700.00, imagen: 'images/hp-envy-34-aio.jpg' },
            { id: 24, nombre: 'Intel NUC 13 Pro', descripcion: 'Mini PC compacto con procesador Intel Core i7 de 13ª generación.', precio: 700.00, imagen: 'images/intel-nuc-13-pro.jpg' },
            { id: 25, nombre: 'Lenovo ThinkStation P620', descripcion: 'Estación de trabajo con procesador AMD Ryzen Threadripper PRO.', precio: 2000.00, imagen: 'images/lenovo-thinkstation-p620.jpg' }
        ]
    },
    {
        nombre: 'Equipos Domésticos',
        productos: [
            { id: 26, nombre: 'iRobot Roomba i7+', descripcion: 'Aspiradora robot con vaciado automático.', precio: 500.00, imagen: 'images/irobot-roomba-i7+.jpg' },
            { id: 27, nombre: 'Samsung WW90T554DTW', descripcion: 'Lavadora inteligente con AI para optimizar el lavado.', precio: 800.00, imagen: 'images/samsung-ww90t554dtw.jpg' },
            { id: 28, nombre: 'LG InstaView Door-in-Door', descripcion: 'Refrigerador con pantalla táctil y tecnología ThinQ.', precio: 2500.00, imagen: 'images/lg-instaview.jpg' },
            { id: 29, nombre: 'Breville Smart Oven Air Fryer', descripcion: 'Horno con freidora de aire y convección.', precio: 450.00, imagen: 'images/breville-smart-oven.jpg' },
            { id: 30, nombre: 'Nespresso Vertuo Next', descripcion: 'Cafetera programable con conectividad Bluetooth.', precio: 180.00, imagen: 'images/nespresso-vertuo-next.jpg' }

        ]
    }
];

// Carrito global (persistente en localStorage)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar un producto al carrito
function addToCart(id, nombre, precio, imagen) {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad += 1;  // Aumentar cantidad si el producto ya está en el carrito
    } else {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1 });  // Si no está, agregarlo al carrito
    }
    updateCartCount();  // Actualizar el contador del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar el carrito en localStorage
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const carritoCount = document.getElementById('carrito-count');
    if (carritoCount) {
        carritoCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);  // Contar el total de productos
    }
}

// Función para mostrar el carrito en carrito.html
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '';  // Limpiar contenedor
    let total = 0;

    carrito.forEach(item => {
        const divItem = document.createElement('div');
        divItem.classList.add('item-carrito');
        divItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px;">
            <p>${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(divItem);
        total += item.precio * item.cantidad;  // Calcular el total correctamente para cada producto
    });

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    carrito = carrito.filter(item => item.id !== id);  // Filtrar el producto a eliminar
    updateCartCount();  // Actualizar el contador del carrito
    mostrarCarrito();  // Actualizar la vista del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar el carrito en localStorage
}

// Llamada a la función para mostrar el carrito cuando se carga la página carrito.html
if (document.getElementById('carrito')) {
    document.addEventListener('DOMContentLoaded', mostrarCarrito);
}

// Asegurarse de que el carrito se actualice en la página de contacto
if (document.getElementById('carrito-count')) {
    document.addEventListener('DOMContentLoaded', function() {
        updateCartCount();
    });
}

// Función para mostrar productos destacados en index.html
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('productos-destacados')) {
        mostrarProductosDestacados();
    }
});

// Función para mostrar productos destacados en index.html
function mostrarProductosDestacados() {
    const contenedorDestacados = document.getElementById('productos-destacados');
    let productosDestacados = [];
    categorias.forEach(categoria => {
        productosDestacados.push(...categoria.productos.slice(0, 1));  // Tomamos solo el primer producto de cada categoría
    });

    productosDestacados.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="btn-add-to-cart" onclick="addToCart(${producto.id}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}')">Añadir al carrito</button>
        `;
        contenedorDestacados.appendChild(divProducto);
    });
}

// Función para mostrar las categorías en categorias.html
function mostrarCategorias() {
    const contenedorCategorias = document.getElementById('categorias');
    categorias.forEach(categoria => {
        const divCategoria = document.createElement('div');
        divCategoria.classList.add('categoria');
        divCategoria.innerHTML = `<h3>${categoria.nombre}</h3>`;
        categoria.productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="btn-add-to-cart" onclick="addToCart(${producto.id}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}')">Añadir al carrito</button>
            `;
            divCategoria.appendChild(divProducto);
        });
        contenedorCategorias.appendChild(divCategoria);
    });
}

// Llamada a la función para mostrar categorías en categorias.html
if (document.getElementById('categorias')) {
    document.addEventListener('DOMContentLoaded', function() {
        mostrarCategorias();
        updateCartCount();  // Asegurar que el contador del carrito se actualice al cargar la página
    });
}
