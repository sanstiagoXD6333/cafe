// scripts.js

// Inicializar un carrito vacío
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    listaCarrito.innerHTML = ''; // Limpiar la lista

    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
        total += parseFloat(producto.precio);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para manejar el evento de clic en los botones "Agregar al Carrito"
document.querySelectorAll('.boton-comprar').forEach(button => {
    button.addEventListener('click', (event) => {
        const producto = event.target.parentElement; // Obtener el elemento padre
        const nombre = producto.getAttribute('data-nombre');
        const precio = producto.getAttribute('data-precio');
        agregarAlCarrito(nombre, precio);
    });
});

// Función para reproducir/pausar música
const musica = document.getElementById('musica');
const toggleMusicButton = document.getElementById('toggle-music');

toggleMusicButton.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        toggleMusicButton.textContent = 'Pausar Música';
    } else {
        musica.pause();
        toggleMusicButton.textContent = 'Reproducir Música';
    }
});

// Función para manejar la compra (puedes agregar lógica adicional aquí)
document.getElementById('comprar').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    } else {
        alert('Gracias por tu compra!');
        carrito = []; // Vaciar el carrito
        actualizarCarrito(); // Actualizar la visualización del carrito
    }
});