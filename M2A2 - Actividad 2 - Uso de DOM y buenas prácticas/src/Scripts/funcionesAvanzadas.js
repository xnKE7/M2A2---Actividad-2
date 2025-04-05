function crearTabla(filas, columnas) {
    const contenedor = document.getElementById("tabla");
    contenedor.innerHTML = "";

    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");

    for (let x = 0; x < filas; x++) {
        const fila = document.createElement("tr");
        for (let y = 0; y < columnas; y++) {
            const celda = document.createElement("td");
            celda.textContent = `${x},${y}`;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);
}

export { crearTabla };
