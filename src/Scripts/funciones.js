function valores(){
    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;
    let codigo = "";
    codigo = codigo + "<table border='1'>"
    for(let x = 0; x<filas; x++){
       codigo = codigo + "<tr>"
       for (let y = 0; y<columnas; y++){
        codigo = codigo + "<td>"+x+","+y;

        codigo = codigo + "</td>"
       }
       codigo = codigo + "</tr>"
    }
    codigo = codigo + "</table>"
    document.getElementById("tabla").innerHTML = codigo;
}
