import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de calificaciones a evaluar: ", function(total) {
    const totalNotas = parseInt(total);

    let suma = 0;
    let notaMaxima = 0;
    let notaMinima = 10;

    // Definición del vector para almacenar las notas
    let notas = [];
    let contador = 0;

    // Función que repite la solicitud de notas utilizando la misma lógica del ejemplo
    function pedirNotas() {
        if (contador < totalNotas) {
            rl.question(`Ingrese la calificacion ${contador + 1}: `, function(notaIngresada) {
                const nota = parseFloat(notaIngresada);
                
                notas.push(nota);
                contador++;

                pedirNotas();
            });
        } else {
            // Bucle FOR principal para procesar los datos acumulados
            for (let i = 0; i < totalNotas; i++) {
                suma = suma + notas[i];

                if (notas[i] > notaMaxima) {
                    notaMaxima = notas[i];
                }

                if (notas[i] < notaMinima) {
                    notaMinima = notas[i];
                }
            }

            const promedio = suma / totalNotas;

            console.log(`Promedio general: ${promedio}`);
            console.log(`Calificacion mas alta: ${notaMaxima}`);
            console.log(`Calificacion mas baja: ${notaMinima}`);

            let estado = "";
            if (promedio >= 7) {
                estado = "Aprobado";
            } else {
                estado = "Reprobado";
            }

            switch (estado) {
                case "Aprobado":
                    console.log("Estado: El estudiante aprobo la asignatura.");
                    break;
                case "Reprobado":
                    console.log("Estado: El estudiante reprobo la asignatura.");
                    break;
            }

            rl.close();
        }
    }

    pedirNotas();
});