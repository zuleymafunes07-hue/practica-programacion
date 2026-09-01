// Declaración del radio del círculo
let radio = 5;

// Definición de la constante Pi
let pi = 3.14159;

// Cálculo del perímetro (2 * pi * radio)
let perimetro = 2 * pi * radio;

// Cálculo del área (pi * radio al cuadrado)
let area = pi * (radio ** 2);

// Muestra de resultados en consola redondeados a 2 decimales
console.log(`Radio: ${radio}`);
console.log(`Perímetro: ${perimetro.toFixed(2)}`);
console.log(`Área: ${area.toFixed(2)}`);