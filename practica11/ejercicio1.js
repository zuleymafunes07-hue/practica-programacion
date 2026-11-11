const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese las notas del estudiante separadas por coma (ejemplo: 8, 7, 9, 6, 10): ", (entrada) => {
    // Convertimos la entrada a un arreglo de números
    const notas = entrada.split(',').map(num => parseFloat(num.trim()));

    // reduce: acumula la suma total de las notas
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);

    // Calculamos el promedio
    const promedio = suma / notas.length;

    // Mostramos el resultado con 2 decimales
    console.log(`El promedio es: ${promedio.toFixed(2)}`);

    rl.close();
});