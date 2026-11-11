const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 220 }
];

// forEach: Recorre y muestra cada producto en consola
console.log("--- Lista de todos los productos (forEach) ---");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

// filter: Filtra los productos mayores a $100
const productosCaros = productos.filter(producto => producto.precio > 100);

rl.question("\nPresione ENTER para ver la lista de productos filtrados (> $100): ", () => {
    console.log("\n--- Productos mayores a $100 (filter) ---");
    console.log(productosCaros);

    rl.close();
});