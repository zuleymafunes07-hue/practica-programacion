let fechaActual = new Date();

let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1;
let anio = fechaActual.getFullYear();

let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes().toString().padStart(2, '0');
let segundos = fechaActual.getSeconds().toString().padStart(2, '0');

console.log(`Hoy es ${dia}/${mes}/${anio} y son las ${hora}:${minutos}:${segundos}`);