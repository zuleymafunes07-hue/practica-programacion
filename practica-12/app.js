const readline = require('readline');
const { cargarDatos } = require('./database/database');
const insertarProducto = require('./operaciones/insertar');
const mostrarProductos = require('./operaciones/mostrar');
const actualizarProducto = require('./operaciones/actualizar');
const eliminarProducto = require('./operaciones/eliminar');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = cargarDatos();

function menuPrincipal() {
    console.log('\n--- SISTEMA DE GESTIÓN DE INVENTARIO ---');
    console.log('1. Insertar nuevo producto');
    console.log('2. Mostrar todos los productos (JSON)');
    console.log('3. Actualizar producto');
    console.log('4. Eliminar producto');
    console.log('5. Salir');

    r1.question('Seleccione una opción: ', (opcion) => {
        switch (opcion.trim()) {
            case '1':
                insertarProducto(r1, productos, menuPrincipal);
                break;
            case '2':
                mostrarProductos(productos, menuPrincipal);
                break;
            case '3':
                actualizarProducto(r1, productos, menuPrincipal);
                break;
            case '4':
                eliminarProducto(r1, productos, menuPrincipal);
                break;
            case '5':
                console.log('\n[!] Saliendo del sistema... Los datos están seguros en "productos.json".');
                r1.close();
                break;
            default:
                console.log('\n[!] Opción no válida. Intente de nuevo.');
                menuPrincipal();
                break;
        }
    });
}

console.log('Bienvenido al sistema CRUD modular.');
menuPrincipal();