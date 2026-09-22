const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldo = 1000;

console.log("=== TAREA 3: SIMULADOR DE CAJERO AUTOMÁTICO ===");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");

rl.question("\nSeleccione una opción: ", (respuestaOpcion) => {
  
  let opcion = parseInt(respuestaOpcion);

  // Evaluamos la opción con Switch
  switch (opcion) {
    case 1: {
      console.log(`Saldo actual: $${saldo}`);
      rl.close();
      break;
    }

    case 2: {
      rl.question("Monto a retirar: $", (respuestaRetiro) => {
        let retiro = parseFloat(respuestaRetiro);

        if (retiro <= 0) {
          console.log("El monto debe ser mayor a 0");
        } else if (retiro % 5 !== 0) {
          console.log("El monto debe ser múltiplo de 5");
        } else if (retiro > saldo) {
          console.log("El monto excede el saldo disponible");
        } else {
          saldo = saldo - retiro;
          console.log(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
        }
        rl.close();
      });
      break;
    }

    case 3: {
      rl.question("Monto a depositar: $", (respuestaDeposito) => {
        let deposito = parseFloat(respuestaDeposito);

        if (deposito <= 0) {
          console.log("El monto debe ser mayor a 0");
        } else if (deposito > 5000) {
          console.log("El monto no debe exceder $5000 por depósito");
        } else {
          saldo = saldo + deposito;
          console.log(`Depósito exitoso. Su nuevo saldo es: $${saldo}`);
        }
        rl.close();
      });
      break;
    }

    case 4: {
      console.log("Gracias por usar el cajero");
      rl.close();
      break;
    }

    default: {
      console.log("Opción no válida");
      rl.close();
      break;
    }
  }
});