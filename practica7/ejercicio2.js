let saldo = 1000;
let opcion = 0;

do {
    let menu = "--- CAJERO AUTOMÁTICO ---\n" +
               `Saldo actual: $${saldo}\n` +
               "1) Consultar saldo\n" +
               "2) Retirar\n" +
               "3) Depositar\n" +
               "4) Salir\n" +
               "Seleccione una opción (1-4):";

    let entrada = prompt(menu);
    if (entrada === null) break; // Salir si el usuario presiona Cancelar

    opcion = Number(entrada);

    switch (opcion) {
        case 1:
            alert(`Su saldo actual es: $${saldo}`);
            break;

        case 2:
            let retiro = Number(prompt("Ingrese la cantidad a retirar:"));
            if (isNaN(retiro) || retiro <= 0) {
                alert("Monto inválido. Ingrese un valor positivo.");
            } else if (retiro > saldo) {
                alert("Fondos insuficientes. No puede retirar más de su saldo.");
            } else {
                saldo -= retiro;
                alert(`Retiro exitoso de $${retiro}. Nuevo saldo: $${saldo}`);
            }
            break;

        case 3:
            let deposito = Number(prompt("Ingrese la cantidad a depositar:"));
            if (isNaN(deposito) || deposito <= 0) {
                alert("Monto inválido. El depósito debe ser mayor a $0.");
            } else {
                saldo += deposito;
                alert(`Depósito exitoso de $${deposito}. Nuevo saldo: $${saldo}`);
            }
            break;

        case 4:
            alert("Gracias por usar nuestro cajero automático. ¡Hasta luego!");
            break;

        default:
            alert("Opción no válida. Ingrese un número entre 1 y 4.");
            break;
    }
} while (opcion !== 4);