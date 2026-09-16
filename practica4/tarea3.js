const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('--- MENÚ DE CONVERSIONES ---');
console.log('1) Convertir de grados Celsius a Fahrenheit');
console.log('2) Convertir de grados Fahrenheit a Celsius');
console.log('3) Salir');

rl.question('Seleccione una opción (1-3): ', (opcionInput) => {
  const opcion = parseInt(opcionInput, 10);

  switch (opcion) {
    case 1:
      rl.question('Ingrese los grados Celsius: ', (celsiusInput) => {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = celsius * (9 / 5) + 32;
        console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);
        rl.close();
      });
      break;

    case 2:
      rl.question('Ingrese los grados Fahrenheit: ', (fahrenheitInput) => {
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = (fahrenheit - 32) * (5 / 9);
        console.log(`${fahrenheit}°F equivalen a ${celsius.toFixed(2)}°C`);
        rl.close();
      });
      break;

    case 3:
      console.log('Saliendo del programa...');
      rl.close();
      break;

    default:
      console.log('Opción no válida.');
      rl.close();
      break;
  }
});