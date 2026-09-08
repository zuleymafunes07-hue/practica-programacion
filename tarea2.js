const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera calificación: ", function(nota1){
    rl.question("Ingrese la segunda calificación: ", function(nota2){

        if(nota1 > nota2){
            console.log(`La calificación más alta es: ${nota1}`);
        }else if(nota2 > nota1){
            console.log(`La calificación más alta es: ${nota2}`);
        }else{
            console.log("Las calificaciones son iguales");
        }

        rl.close();
    });
});