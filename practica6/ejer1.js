import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero entero positivo: ", function(numeroIngresado) {
    const numero = parseInt(numeroIngresado);

    let factorial = 1;

    // Bucle FOR para multiplicar desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    console.log(`El factorial de ${numero}! es: ${factorial}`);

    // Evaluación con switch según el número ingresado
    switch (numero) {
        case 0:
        case 1:
            console.log("Nota: El factorial de 0 o 1 siempre es 1.");
            break;
        default:
            console.log("Calculo finalizado con exito.");
            break;
    }

    rl.close();
});
