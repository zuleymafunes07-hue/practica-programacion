const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una calificación numérica (0-100): ', (notaInput) => {
  const nota = parseFloat(notaInput);

  if (nota < 0 || nota > 100) {
    console.log('Calificación fuera del rango válido (0-100).');
  } else {
    // Math.floor agrupa la nota en decenas (ej. 95 / 10 = 9.5 -> Math.floor = 9)
    const rango = Math.floor(nota / 10);

    switch (rango) {
      case 10:
      case 9:
        console.log('Calificación por letra: A');
        break;
      case 8:
        console.log('Calificación por letra: B');
        break;
      case 7:
        console.log('Calificación por letra: C');
        break;
      case 6:
        console.log('Calificación por letra: D');
        break;
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
      case 0:
        console.log('Calificación por letra: F');
        break;
      default:
        console.log('Calificación no válida.');
        break;
    }
  }

  rl.close();
});