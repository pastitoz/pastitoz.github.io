// carrito.js

// Variable para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    // Verificamos si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        // Si el producto ya existe, incrementamos la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si el producto no existe, lo agregamos con cantidad 1
        carrito.push({...producto, cantidad: 1});
    }

    // Actualizamos el carrito en la vista
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('productos-carrito');
    contenedorCarrito.innerHTML = '';  // Limpiamos el contenedor del carrito

    let total = 0;
    carrito.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
        contenedorCarrito.appendChild(divProducto);
        total += producto.precio * producto.cantidad;
    });

    // Actualizamos el total del carrito
    const totalPrecio = document.getElementById('total-precio');
    totalPrecio.textContent = total.toFixed(2);
}

// Función que se ejecuta cuando se hace clic en "Añadir al carrito"
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-add-to-cart')) {
        const productoElement = event.target.closest('.producto');
        
        const producto = {
            id: productoElement.getAttribute('data-id'), // Usamos un atributo "data-id" para identificar el producto
            nombre: productoElement.querySelector('h4').textContent,
            precio: parseFloat(productoElement.querySelector('p').textContent.replace('Precio: $', '')),
            imagen: productoElement.querySelector('img').src
        };

        agregarAlCarrito(producto);
    }
});

// Función para mostrar los productos destacados en la página de inicio (index.html)
function mostrarProductosDestacados() {
    const contenedorDestacados = document.getElementById('productos-destacados');
    productosDestacados.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.setAttribute('data-id', producto.id);  // Usamos un atributo para identificar el producto
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="btn-add-to-cart">Añadir al carrito</button>
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
            divProducto.setAttribute('data-id', producto.id);  // Usamos un atributo para identificar el producto
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="btn-add-to-cart">Añadir al carrito</button>
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
