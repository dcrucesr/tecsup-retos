function calcular() {

    let litros = document.getElementById('litros').value;
    let precioG = document.getElementById('pGalones').value;
    if (litros % 1 == 0) {
        let cantidadG = (litros / 3.785).toFixed(3);
        document.getElementById("cGalones").value = cantidadG;
        document.getElementById("gTotal").value = cantidadG * precioG;
    } else {
        alert("Solo se admite valores enteros en la cantidad de litros");
    }
}