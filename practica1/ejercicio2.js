// Variable que contiene la cantidad de dinero en dólares (USD)
let usd = 100;

// Conversiones a cada moneda multiplicando por su respectiva tasa
let eur = usd * 0.92; // Dólares a Euros
let svc = usd * 8.75; // Dólares a Pesos Salvadoreños
let gtq = usd * 7.80; // Dólares a Quetzales Guatemaltecos

// Muesttra de cada conversión con su símbolo y moneda redondeada a 2 decimales
console.log(`${usd} USD = ${eur.toFixed(2)} EUR`);
console.log(`${usd} USD = ${svc.toFixed(2)} SVC`);
console.log(`${usd} USD = ${gtq.toFixed(2)} GTQ`);