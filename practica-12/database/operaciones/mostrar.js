function mostrarProductos(productos, menuPrincipal) {
    console.log('\n--- LISTA DE PRODUCTOS DESDE EL ARCHIVO JSON ---');
    if (productos.length === 0) {
        console.log('No hay productos registrados en el archivo.');
    } else {
        console.table(productos);
    }
    devolucionDeLlamada();

    function devolucionDeLlamada() {
        menuPrincipal();
    }
}

module.exports = mostrarProductos;