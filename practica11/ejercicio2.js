const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función de orden superior (Fábrica de funciones)
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// Creamos el duplicador (factor 2) y el triplicador (factor 3)
const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);

rl.question("Ingrese un número para probar el duplicador y triplicador: ", (entrada) => {
    const numero = parseFloat(entrada);

    console.log(`Resultado con duplicador (x2): ${duplicador(numero)}`);
    console.log(`Resultado con triplicador (x3): ${triplicador(numero)}`);

    rl.close();
});