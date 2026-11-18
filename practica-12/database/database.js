const fs = require('fs');
const path = require('path');

const ARCHIVO_JSON = path.join(__dirname, 'productos.json');

function cargarDatos() {
    if (fs.existsSync(ARCHIVO_JSON)) {
        const datos = fs.readFileSync(ARCHIVO_JSON, 'utf8');
        return JSON.parse(datos);
    } else {
        fs.writeFileSync(ARCHIVO_JSON, JSON.stringify([], null, 2));
        return [];
    }
}

function guardarDatos(productos) {
    fs.writeFileSync(ARCHIVO_JSON, JSON.stringify(productos, null, 2), 'utf8');
}

module.exports = { cargarDatos, guardarDatos };