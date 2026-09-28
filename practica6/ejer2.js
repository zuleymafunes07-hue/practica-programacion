import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero entero N: ", function(numeroIngresado) {
    const N = parseInt(numeroIngresado);

    let esPrimo = true;

    // Los números menores o iguales a 1 no son primos
    if (N <= 1) {
        esPrimo = false;
    } else {
        // Bucle FOR para verificar si tiene divisores
        for (let i = 2; i < N; i++) {
            if (N % i == 0) {
                esPrimo = false;
            }
        }
    }

    // Mostrar si el número N es primo o no
    if (esPrimo == true) {
        console.log(`El numero ${N} es primo.`);
    } else {
        console.log(`El numero ${N} no es primo.`);
    }

    console.log(`Numeros primos desde 1 hasta ${N}:`);

    // Bucle FOR para encontrar y mostrar todos los números primos desde 1 hasta N
    for (let num = 2; num <= N; num++) {
        let esPrimoActual = true;

        for (let div = 2; div < num; div++) {
            if (num % div == 0) {
                esPrimoActual = false;
            }
        }

        if (esPrimoActual == true) {
            console.log(num);
        }
    }

    rl.close();
});