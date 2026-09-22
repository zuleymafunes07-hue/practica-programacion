const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== TAREA 2: CLASIFICADOR DE NÚMEROS ===");

// Solicitamos a, b y c
rl.question("Ingrese el primer número (a): ", (num1) => {
  rl.question("Ingrese el segundo número (b): ", (num2) => {
    rl.question("Ingrese el tercer número (c): ", (num3) => {

      let a = parseFloat(num1);
      let b = parseFloat(num2);
      let c = parseFloat(num3);

      // Evaluación de la relación entre los números
      if (a === b && b === c) {
        console.log("Los tres números son iguales");
      } else if (a !== b && b !== c && a !== c) {
        console.log("Los tres números son diferentes");
      } else {
        console.log("Hay dos números iguales");
      }

      // Cálculo del número mayor
      let mayor = a;
      if (b > mayor) {
        mayor = b;
      }
      if (c > mayor) {
        mayor = c;
      }

      // Cálculo del número menor
      let menor = a;
      if (b < menor) {
        menor = b;
      }
      if (c < menor) {
        menor = c;
      }

      console.log(`El mayor es: ${mayor}`);
      console.log(`El menor es: ${menor}`);

      // Verificación de números negativos
      if (a < 0 || b < 0 || c < 0) {
        console.log("Hay números negativos");
      }

      rl.close();
    });
  });
});