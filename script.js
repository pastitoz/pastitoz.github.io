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
                imagen: 'images/arduino-uno.jpg'
            },
            {
                id: 2,
                nombre: 'Raspberry Pi 4',
                descripcion: 'Computadora de placa reducida para proyectos de programación.',
                precio: 35.00,
                imagen: 'images/raspberry-pi-4.jpg'
            },
            {
                id: 3,
                nombre: 'ESP32',
                descripcion: 'Módulo WiFi y Bluetooth para proyectos IoT.',
                precio: 20.00,
                imagen: 'images/esp32.jpg'
            },
            {
                id: 4,
                nombre: 'BeagleBone Black',
                descripcion: 'Placa de desarrollo para proyectos avanzados.',
                precio: 45.00,
                imagen: 'images/beaglebone-black.jpg'
            },
            {
                id: 5,
                nombre: 'STM32',
                descripcion: 'Microcontrolador de 32 bits para proyectos electrónicos.',
                precio: 30.00,
                imagen: 'images/stm32.jpg'
            }
        ]
    },
    {
        nombre: 'Equipos de Programación',
        productos: [
            {
                id: 1,
                nombre: 'Laptop Gaming',
                descripcion: 'Laptop potente para programación y juegos.',
                precio: 1200.00,
                imagen: 'images/laptop-gaming.jpg'
            },
            {
                id: 2,
                nombre: 'Monitor 4K',
                descripcion: 'Monitor de alta resolución para desarrollo.',
                precio: 400.00,
                imagen: 'images/monitor-4k.jpg'
            },
            {
                id: 3,
                nombre: 'Teclado Mecánico',
                descripcion: 'Teclado mecánico con retroiluminación RGB.',
                precio: 100.00,
                imagen: 'images/teclado-mecanico.jpg'
            },
            {
                id: 4,
                nombre: 'Mouse Gamer',
                descripcion: 'Mouse ergonómico con alta precisión.',
                precio: 50.00,
                imagen: 'images/mouse-gamer.jpg'
            },
            {
                id: 5,
                nombre: 'Docking Station',
                descripcion: 'Estación de acoplamiento para múltiples conexiones.',
                precio: 80.00,
                imagen: 'images/docking-station.jpg'
            }
        ]
    },
    {
        nombre: 'Equipos Inteligentes',
        productos: [
            {
                id: 1,
                nombre: 'Termostato Inteligente',
                descripcion: 'Controla la temperatura de tu hogar desde tu móvil.',
                precio: 150.00,
                imagen: 'images/termostato-inteligente.jpg'
            },
            {
                id: 2,
                nombre: 'Cámara de Seguridad',
                descripcion: 'Cámara de vigilancia con conexión WiFi.',
                precio: 100.00,
                imagen: 'images/camara-seguridad.jpg'
            },
            {
                id: 3,
                nombre: 'Bombilla Inteligente',
                descripcion: 'Controla la iluminación desde tu smartphone.',
                precio: 25.00,
                imagen: 'images/bombilla-inteligente.jpg'
            },
            {
                id: 4,
                nombre: 'Asistente Virtual',
                descripcion: 'Dispositivo para controlar tu hogar inteligente.',
                precio: 80.00,
                imagen: 'images/asistente-virtual.jpg'
            },
            {
                id: 5,
                nombre: 'Enchufe Inteligente',
                descripcion: 'Controla tus dispositivos desde cualquier lugar.',
                precio: 30.00,
                imagen: 'images/enchufe-inteligente.jpg'
            }
        ]
    },
    {
        nombre: 'Teléfonos Móviles',
        productos: [
            {
                id: 1,
                nombre: 'Smartphone XYZ',
                descripcion: 'Teléfono inteligente con pantalla AMOLED.',
                precio: 700.00,
                imagen: 'images/smartphone-xyz.jpg'
            },
            {
                id: 2,
                nombre: 'Teléfono 5G ABC',
                descripcion: 'Teléfono móvil compatible con redes 5G.',
                precio: 800.00,
                imagen: 'images/telefono-5g-abc.jpg'
            },
            {
                id: 3,
                nombre: 'Teléfono Plegable',
                descripcion: 'Teléfono innovador con pantalla plegable.',
                precio: 1200.00,
                imagen: 'images/telefono-plegable.jpg'
            },
            {
                id: 4,
                nombre: 'Teléfono de Gama Baja',
                descripcion: 'Teléfono asequible con buenas características.',
                precio: 200.00,
                imagen: 'images/telefono-gama-baja.jpg'
            },
            {
                id: 5,
                nombre: 'Teléfono con Cámara Avanzada',
                descripcion: 'Teléfono con cámara de alta resolución para fotos impresionantes.',
                precio: 900.00,
                imagen: 'images/telefono-camara-avanzada.jpg'
            }
        ]
    },
    {
        nombre: 'Ordenadores',
        productos: [
            {
                id: 1,
                nombre: 'PC de Escritorio',
                descripcion: 'Ordenador potente para tareas de programación y diseño.',
                precio: 1500.00,
                imagen: 'images/pc-escritorio.jpg'
            },
            {
                id: 2,
                nombre: 'Laptop Ultraligera',
                descripcion: 'Laptop ligera y portátil para llevar a todas partes.',
                precio: 1000.00,
                imagen: 'images/laptop-ultraligera.jpg'
            },
            {
                id: 3,
                nombre: 'All-in-One',
                descripcion: 'Ordenador todo en uno con pantalla táctil.',
                precio: 1200.00,
                imagen: 'images/all-in-one.jpg'
            },
            {
                id: 4,
                nombre: 'Mini PC',
                descripcion: 'PC compacto ideal para espacios reducidos.',
                precio: 400.00,
                imagen: 'images/mini-pc.jpg'
            },
            {
                id: 5,
                nombre: 'Estación de Trabajo',
                descripcion: 'Ordenador diseñado para tareas de alto rendimiento.',
                precio: 2000.00,
                imagen: 'images/estacion-de-trabajo.jpg'
            }
        ]
    },
    {
        nombre: 'Equipos Domésticos',
        productos: [
            {
                id: 1,
                nombre: 'Aspiradora Robot',
                descripcion: 'Aspiradora automática que limpia tu hogar.',
                precio: 300.00,
                imagen: 'images/aspiradora-robot.jpg'
            },
            {
                id: 2,
                nombre: 'Lavadora Inteligente',
                descripcion: 'Lavadora que se controla desde tu smartphone.',
                precio: 600.00,
                imagen: 'images/lavadora-inteligente.jpg'
            },
            {
                id: 3,
                nombre: 'Refrigerador Inteligente',
                descripcion: 'Refrigerador con pantalla y conexión a internet.',
                precio: 1200.00,
                imagen: 'images/refrigerador-inteligente.jpg'
            },
            {
                id: 4,
                nombre: 'Horno de Convección',
                descripcion: 'Horno que cocina de manera uniforme y rápida.',
                precio: 400.00,
                imagen: 'images/horno-conveccion.jpg'
            },
            {
                id: 5,
                nombre: 'Cafetera Programable',
                descripcion: 'Cafetera que puedes programar desde tu móvil.',
                precio: 150.00,
                imagen: 'images/cafetera-programable.jpg'
            }
        ]
    }
];

// Función para mostrar los productos destacados en la página de inicio (index.html)
const productosDestacados = [
    {
        id: 1,
        nombre: 'Termostato Inteligente',
        descripcion: 'Controla la temperatura de tu hogar desde tu móvil.',
        precio: 150.00,
        imagen: 'images/termostato-inteligente.jpg'
    },
    {
        id: 2,
        nombre: 'Cámara de Seguridad',
        descripcion: 'Cámara de vigilancia con conexión WiFi.',
        precio: 100.00,
        imagen: 'images/camara-seguridad.jpg'
    },
    {
        id: 3,
        nombre: 'Bombilla Inteligente',
        descripcion: 'Controla la iluminación desde tu smartphone.',
        precio: 25.00,
        imagen: 'images/bombilla-inteligente.jpg'
    },
    {
        id: 4,
        nombre: 'Asistente Virtual',
        descripcion: 'Dispositivo para controlar tu hogar inteligente.',
        precio: 80.00,
        imagen: 'images/asistente-virtual.jpg'
    },
    {
        id: 5,
        nombre: 'Enchufe Inteligente',
        descripcion: 'Controla tus dispositivos desde cualquier lugar.',
        precio: 30.00,
        imagen: 'images/enchufe-inteligente.jpg'
    }
];

// Función para mostrar los productos destacados
function mostrarProductosDestacados() {
    const contenedorDestacados = document.getElementById('productos-destacados');
    productosDestacados.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
        `;
        contenedorDestacados.appendChild(divProducto);
    });
}

// Función para mostrar las categorías y productos en la página de categorías (categorias.html)
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
            `;
            divCategoria.appendChild(divProducto);
        });
        contenedorCategorias.appendChild(divCategoria);
    });
}

// Llamada a la función para mostrar productos destacados en index.html
document.addEventListener('DOMContentLoaded', mostrarProductosDestacados);

// Llamada a la función para mostrar categorías en categorias.html
document.addEventListener('DOMContentLoaded', mostrarCategorias);
