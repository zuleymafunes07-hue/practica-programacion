const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para obtener la letra según la calificación
function obtenerLetra(nota) {
    if (nota >= 90) return 'A';
    if (nota >= 80) return 'B';
    if (nota >= 70) return 'C';
    if (nota >= 60) return 'D';
    return 'F';
}

// Función para calcular el promedio del arreglo
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Solicitar datos al usuario
rl.question("¿Cuántas calificaciones desea ingresar?: ", (cantidadStr) => {
    let cantidad = parseInt(cantidadStr);
    let calificaciones = [];

    function pedirNota(i) {
        if (i < cantidad) {
            rl.question(`Ingrese la calificación #${i + 1}: `, (notaStr) => {
                calificaciones.push(parseFloat(notaStr));
                pedirNota(i + 1);
            });
        } else {
            console.log("\n=== RESULTADOS ===");
            for (let i = 0; i < calificaciones.length; i++) {
                let nota = calificaciones[i];
                console.log(`Calificación ${i + 1}: ${nota} -> Letra: ${obtenerLetra(nota)}`);
            }

            let promedio = calcularPromedio(calificaciones);
            console.log(`Promedio general: ${promedio.toFixed(2)} -> Letra: ${obtenerLetra(promedio)}`);
            rl.close();
        }
    }

    pedirNota(0);
});