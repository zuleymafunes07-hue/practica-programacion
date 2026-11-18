const { guardarDatos } = require('../database/database');

function eliminarProducto(r1, productos, menuPrincipal) {
    r1.question('Ingrese el código del producto para eliminar: ', (codigoEliminar) => {
        const existe = productos.some(p => p.codigo.toLowerCase() === codigoEliminar.toLowerCase());

        if (!existe) {
            console.log('\n[!] ERROR: Producto no encontrado.');
            devolucionDeLlamada();
        } else {
            const nuevosProductos = productos.filter(p => p.codigo.toLowerCase() !== codigoEliminar.toLowerCase());
            guardarDatos(nuevosProductos);
            
            productos.length = 0;
            nuevosProductos.forEach(p => productos.push(p));

            console.log('\n[✔] Producto eliminado y archivo JSON actualizado.');
            devolucionDeLlamada();
        }
    });

    function devolucionDeLlamada() {
        menuPrincipal();
    }
}

module.exports = eliminarProducto;