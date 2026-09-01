// Declaración de variables iniciales (consumo y precio fijo por kWh)
let kwhConsumidos = 250;
let precioKwh = 0.15;

// 1. Cálculo del costo base
let costoBase = kwhConsumidos * precioKwh;

// 2. Cálculo del impuesto del 10%
let impuesto = costoBase * 0.10;

// 3. Cálculo del costo total a pagar
let costoTotal = costoBase + impuesto;

// Muestra del resumen de la factura en consola
console.log(`Consumo: ${kwhConsumidos} kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);