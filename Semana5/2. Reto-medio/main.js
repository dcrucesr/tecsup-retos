function calcular() {
    // Declaración de varibales
    let tipoHamburguesa = document.getElementById('tipoH').value;
    let cantidadHamburguesa = document.getElementById('cantidadH').value;
    let tipoPago = document.getElementById('tipoPago').value;
    let precioHamburguesa = 0;
    let totalSCargo = 0;
    let cargo = 0;
    // Operaciones que se realizan
    if (tipoHamburguesa == "simple") {
        precioHamburguesa = 20;
    } else if (tipoHamburguesa == "doble") {
        precioHamburguesa = 25;
    } else if (tipoHamburguesa == "triple") {
        precioHamburguesa = 28;
    } else {
        console.log("Error en la operación");
    }
    totalSCargo = cantidadHamburguesa * precioHamburguesa;
    if (tipoPago == "tarjeta") {
        cargo = (totalSCargo * 0.05).toFixed(2);
        document.getElementById("cargoTarjeta").value = cargo;
    } else {
        document.getElementById("cargoTarjeta").value = "No se cobra por uso de " + tipoPago;
    }
    document.getElementById("totalPago").value = totalSCargo + cargo;
}