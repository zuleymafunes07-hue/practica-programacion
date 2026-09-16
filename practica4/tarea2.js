const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1Input) => {
  rl.question('Ingrese el segundo número: ', (num2Input) => {
    rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
      const num1 = parseFloat(num1Input);
      const num2 = parseFloat(num2Input);

      switch (operador) {
        case '+':
          console.log(`Resultado: ${num1 + num2}`);
          break;
        case '-':
          console.log(`Resultado: ${num1 - num2}`);
          break;
        case '*':
          console.log(`Resultado: ${num1 * num2}`);
          break;
        case '/':
          if (num2 === 0) {
            console.log('Error: No se puede dividir entre cero.');
          } else {
            console.log(`Resultado: ${num1 / num2}`);
          }
          break;
        default:
          console.log('Error: Operador no válido.');
          break;
      }

      rl.close();
    });
  });
});