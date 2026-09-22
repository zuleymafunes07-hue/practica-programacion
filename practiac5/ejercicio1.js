// Importamos el módulo readline
const readline = require('readline');

// Creación de la interfaz
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== TAREA 1: SISTEMA DE ACCESO BANCARIO ===");

// Solicitamos el tipo de tarjeta
rl.question("Ingrese el tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", (respuestaTipo) => {
  
  let tipo = parseInt(respuestaTipo);

  // Solicitamos el monto
  rl.question("Ingrese el monto a retirar ($): ", (respuestaMonto) => {
    
    let monto = parseFloat(respuestaMonto);
    let limite = 0;
    let esValida = true;

    // Evaluamos el tipo con Switch
    switch (tipo) {
      case 1: {
        limite = 500;
        break;
      }
      case 2: {
        limite = 1000;
        break;
      }
      case 3: {
        limite = 2000;
        break;
      }
      default: {
        esValida = false;
        break;
      }
    }

    // Validaciones con IF...ELSE
    if (!esValida) {
      console.log("Tarjeta no válida");
    } else if (monto > limite) {
      console.log("Límite excedido");
    } else if (monto % 10 !== 0 || monto <= 0) {
      console.log("El monto debe ser múltiplo de 10");
    } else {
      console.log("Retiro exitoso");
    }

    rl.close();
  });
});