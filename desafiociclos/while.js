//while ***********************
let stock = 10
let precio = 1000;
let opcion = prompt("Elija su opcion.Con un numero 1 al 5");
let cantidad =0

while (opcion < 5 && opcion > 0) {
    cantidad = prompt(`cuantos almohadones lleva?`);
    if (cantidad > 10) {
        alert("no tenemos stock suficiente")
        cantidad = prompt(`cuantos almohadones lleva?`);
}
    total = cantidad * precio;
    alert(`el precio es ${total} pesos`);
    break;
}
