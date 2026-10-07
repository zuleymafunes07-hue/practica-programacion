// Generar número secreto entre 1 y 50
const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let adivinador = null;

while (adivinador !== numeroSecreto) {
    let entrada = prompt("Adivina el número secreto (entre 1 y 50):");
    
    // Si el usuario cancela el prompt
    if (entrada === null) {
        console.log("Juego cancelado por el usuario.");
        break;
    }

    adivinador = Number(entrada);
    intentos++;

    if (isNaN(adivinador) || adivinador < 1 || adivinador > 50) {
        alert("Por favor, ingresa un número válido entre 1 y 50.");
    } else if (adivinador < numeroSecreto) {
        alert("El número secreto es MAYOR.");
    } else if (adivinador > numeroSecreto) {
        alert("El número secreto es MENOR.");
    } else {
        alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
    }
}