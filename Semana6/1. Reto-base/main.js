let arreglo = [];
const button = document.querySelector("button");
button.addEventListener("click", agregarValor);

function agregarValor() {
    // Obtenemos el valor del input
    let valor = document.getElementById("valorNuevo").value;
    // Agregar el valor del input al arreglo
    arreglo.push(valor);
    // Confirmamos que el input ha sido agregado al arreglo
    console.log(arreglo);
    // Regresamos a vacio el input
    document.getElementById("valorNuevo").value = "";
}