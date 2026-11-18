const { cargarDatos, guardarDatos } = require('../database/database');

function insertarProducto(r1, productos, menuPrincipal) {
    r1.question('Ingrese el código del producto: ', (codigo) => {
        const codigoExiste = productos.some(p => p.codigo.toLowerCase() === codigo.toLowerCase());

        if (codigoExiste) {
            console.log(`\n[!] ERROR: El código "${codigo}" ya está registrado.`);
            devolucionDeLlamada();
        } else {
            r1.question('Ingrese el nombre: ', (nombre) => {
                r1.question('Ingrese el precio: ', (precio) => {
                    r1.question('Ingrese el stock: ', (stock) => {
                        const nuevoProducto = {
                            codigo: codigo.trim().toLowerCase(),
                            nombre: nombre.trim(),
                            precio: parseFloat(precio),
                            stock: parseInt(stock)
                        };

                        productos.push(nuevoProducto);
                        guardarDatos(productos);
                        console.log('\n[✔] Producto registrado y guardado.');
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

module.exports = insertarProducto;