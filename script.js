let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');

    carritoLista.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        carritoLista.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. ¡Agrega productos antes de finalizar la compra!');
    } else {
        alert(`Compra finalizada. Total: $${total.toFixed(2)}`);
        carrito = [];
        total = 0;
        actualizarCarrito();
    }
}

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        agregarAlCarrito(name, price);
    });
});


function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElemento = document.getElementById('total');
    
    carritoLista.innerHTML = '';
    
    total = 0;
    
    carrito.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.nombre} - $${item.precio} <span class="eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</span>`;
        carritoLista.appendChild(listItem);
        
        total += parseFloat(item.precio);
    });
    
    totalElemento.textContent = total.toFixed(2);
}

function mostrarFinalizarCompra() {
    document.getElementById('carrito-container').style.display = 'none';
    document.getElementById('finalizar-compra').style.display = 'block';
}

function completarCompra() {
    // Aquí deberías enviar la información del pedido al servidor para el procesamiento del pago y envío de correos electrónicos.
    // Puedes simularlo mostrando un mensaje de éxito en lugar de enviar una solicitud real al servidor.

    alert('¡Compra completada con éxito! Se enviará un correo electrónico con la confirmación de tu pedido.');

    // Reiniciar el carrito y redirigir a la página de inicio o agradecimiento.
    carrito = [];
    actualizarCarrito();
    document.getElementById('carrito-container').style.display = 'block';
    document.getElementById('finalizar-compra').style.display = 'none';
}
