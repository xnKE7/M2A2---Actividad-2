function valores() {
    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);
try{
    if (isNaN(filas) || isNaN(columnas)) {
        alert("Los valores no son numericos");
        return;
    }

    if (filas <= 0 || columnas <= 0) {
        alert("El valor debe ser mayor que 0");
        return;
    }

    crearTabla(filas, columnas);
   }
   catch{
    alert("Error: " + error.message);
   }
}

import { crearTabla } from"./funcionesAvanzadas.js";


