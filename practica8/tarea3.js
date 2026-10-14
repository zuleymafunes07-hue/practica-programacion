const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para contar vocales
function contarVocales(texto) {
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

// Función para invertir cadena
function invertirCadena(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}

// Función para verificar palíndromo
function esPalindromo(texto) {
    let limpio = texto.toLowerCase().replace(/[\s]/g, '');
    let invertido = invertirCadena(limpio);
    return limpio === invertido;
}

rl.question("Ingrese una palabra o frase: ", (texto) => {
    console.log(`\n--- RESULTADOS ---`);
    console.log(`Cantidad de vocales: ${contarVocales(texto)}`);
    console.log(`Cadena invertida: ${invertirCadena(texto)}`);
    console.log(`¿Es palíndromo?: ${esPalindromo(texto) ? "Sí" : "No"}`);
    rl.close();
});