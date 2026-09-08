const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre){
    rl.question("Ingrese su edad: ", function(edad){
        rl.question("Ingrese sus años de experiencia: ", function(experiencia){

            if(edad > 18 && experiencia > 0){
                console.log("Candidato válido");
            }else{
                console.log("No cumple con los requisitos");
            }

            rl.close();
        });
    });
});