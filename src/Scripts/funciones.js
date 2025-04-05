function valores() {
    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);

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


function crearTabla(filas, columnas) {
    let codigo = "<table border='1'>";
    for(let x = 0; x < filas; x++) {
        codigo += "<tr>";
        for(let y = 0; y < columnas; y++) {
            codigo += "<td>" + x + "," + y + "</td>";
        }
        codigo += "</tr>";
    }
    codigo += "</table>";
    document.getElementById("tabla").innerHTML = codigo;
}
