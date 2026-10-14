const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones de área y perímetro
function areaCirculo(r) { return Math.PI * Math.pow(r, 2); }
function perimetroCirculo(r) { return 2 * Math.PI * r; }

function areaCuadrado(l) { return Math.pow(l, 2); }
function perimetroCuadrado(l) { return 4 * l; }

function areaRectangulo(b, a) { return b * a; }
function perimetroRectangulo(b, a) { return 2 * (b + a); }

function areaTriangulo(b, a) { return (b * a) / 2; }
function perimetroTriangulo(l1, l2, l3) { return l1 + l2 + l3; }

console.log("1. Círculo\n2. Cuadrado\n3. Rectángulo\n4. Triángulo");
rl.question("Elija una figura (1-4): ", (opcion) => {
    switch (opcion) {
        case "1":
            rl.question("Ingrese el radio: ", (r) => {
                let radio = parseFloat(r);
                console.log(`Área: ${areaCirculo(radio).toFixed(2)} | Perímetro: ${perimetroCirculo(radio).toFixed(2)}`);
                rl.close();
            });
            break;
        case "2":
            rl.question("Ingrese el lado: ", (l) => {
                let lado = parseFloat(l);
                console.log(`Área: ${areaCuadrado(lado).toFixed(2)} | Perímetro: ${perimetroCuadrado(lado).toFixed(2)}`);
                rl.close();
            });
            break;
        case "3":
            rl.question("Ingrese la base: ", (b) => {
                rl.question("Ingrese la altura: ", (h) => {
                    let base = parseFloat(b), altura = parseFloat(h);
                    console.log(`Área: ${areaRectangulo(base, altura).toFixed(2)} | Perímetro: ${perimetroRectangulo(base, altura).toFixed(2)}`);
                    rl.close();
                });
            });
            break;
        case "4":
            rl.question("Ingrese la base: ", (b) => {
                rl.question("Ingrese la altura: ", (h) => {
                    rl.question("Lado 1: ", (l1) => {
                        rl.question("Lado 2: ", (l2) => {
                            rl.question("Lado 3: ", (l3) => {
                                let base = parseFloat(b), altura = parseFloat(h);
                                console.log(`Área: ${areaTriangulo(base, altura).toFixed(2)} | Perímetro: ${perimetroTriangulo(parseFloat(l1), parseFloat(l2), parseFloat(l3)).toFixed(2)}`);
                                rl.close();
                            });
                        });
                    });
                });
            });
            break;
        default:
            console.log("Opción inválida.");
            rl.close();
    }
});