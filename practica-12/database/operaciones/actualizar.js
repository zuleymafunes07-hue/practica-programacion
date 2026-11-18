const { guardarDatos } = require('../database/database');

function actualizarProducto(r1, productos, menuPrincipal) {
    r1.question('Ingrese el código del producto a actualizar: ', (codigoBuscar) => {
        const indice = productos.findIndex(p => p.codigo.toLowerCase() === codigoBuscar.toLowerCase());

        if (indice === -1) {
            console.log('\n[!] ERROR: Producto no encontrado.');
            devolucionDeLlamada();
        } else {
            console.log(`\nProducto encontrado. Ingrese los nuevos datos:`);
            
            r1.question(`Nuevo nombre (${productos[indice].nombre}): `, (nuevoNombre) => {
                r1.question(`Nuevo precio (${productos[indice].precio}): `, (nuevoPrecio) => {
                    r1.question(`Nuevo stock (${productos[indice].stock}): `, (nuevoStock) => {
                        
                        productos[indice].nombre = nuevoNombre || productos[indice].nombre;
                        productos[indice].precio = nuevoPrecio ? parseFloat(nuevoPrecio) : productos[indice].precio;
                        productos[indice].stock = nuevoStock ? parseInt(nuevoStock) : productos[indice].stock;

                        guardarDatos(productos);
                        console.log('\n[✔] Producto actualizado.');
                        devolucionDeLlamada();
                    });
                });
            });
        }
    });

    function devolucionDeLlamada() {
        menuPrincipal();
    }
}

module.exports = actualizarProducto;