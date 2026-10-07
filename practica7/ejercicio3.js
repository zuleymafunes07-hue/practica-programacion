// 1. Arreglo de objetos con al menos 4 productos
const inventario = [
    { nombre: "Laptop Dell", precio: 800, cantidad: 5 },
    { nombre: "Teclado Mecánico", precio: 45, cantidad: 12 },
    { nombre: "Mouse Óptico", precio: 20, cantidad: 20 },
    { nombre: "Monitor 24''", precio: 180, cantidad: 8 }
];

let valorTotalInventario = 0;
let totalProductosUnicos = inventario.length;

console.log("=== DETALLE DE PRODUCTOS (FOR...OF) ===");

// 2. Recorrer el arreglo usando FOR...OF
for (const producto of inventario) {
    const valorTotalProducto = producto.precio * producto.cantidad;
    valorTotalInventario += valorTotalProducto;

    console.log(`Producto: ${producto.nombre} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad} | Valor Total: $${valorTotalProducto}`);
}

// 3. Objeto con el resumen del inventario
const resumenInventario = {
    totalProductos: totalProductosUnicos,
    valorTotal: valorTotalInventario
};

console.log("\n=== RESUMEN DEL INVENTARIO (FOR...IN) ===");

// 4. Recorrer el objeto resumen usando FOR...IN
for (const clave in resumenInventario) {
    console.log(`${clave}: ${resumenInventario[clave]}`);
}