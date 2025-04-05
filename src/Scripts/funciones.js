function valores() {
    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);
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
