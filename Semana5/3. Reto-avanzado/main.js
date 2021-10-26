function calcularCita() {
    // Declaración de varibales
    let nConsulta = document.getElementById('nConsulta').value;
    let costoTratamiento = 0;
    let costoCita = 0;
    let entero = true;
    // Operaciones que se realizan
    for (var i = 0; i < nConsulta.length; i++) {
        var aux = parseInt(nConsulta.charAt(i));
        if (aux % 1 != 0) {
            entero = false;
        }
    }
    if (entero) { //n igual a 0 si es entero
        if (nConsulta > 0 && nConsulta <= 3) { //El número de consultas es menor que 3
            costoCita = 200;
            costoTratamiento = nConsulta * 200;
        } else if (nConsulta >= 4 && nConsulta <= 5) { //El número de consultas es entre 4 y 5
            costoCita = 150;
            costoTratamiento = 3 * 200 + (nConsulta - 3) * 150;
        } else if (nConsulta >= 6 && nConsulta <= 9) { //El número de consultas es entre 6 y 9
            costoCita = 100;
            costoTratamiento = 3 * 200 + 2 * 150 + (nConsulta - 5) * 100;
        } else { //El número de consultas es mayor a 10
            costoCita = 50;
            costoTratamiento = 3 * 200 + 2 * 150 + 3 * 100 + (nConsulta - 9) * 50;
        }
        document.getElementById("costoCita").value = costoCita;
        document.getElementById("totalPago").value = costoTratamiento;
    } else {
        alert("Solo se permiten valores enteros");
    }
}