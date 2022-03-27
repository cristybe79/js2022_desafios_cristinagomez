// for********************************
let stock = 10;
const precio = 1000
let total = 0

let cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));


if ((stock < 0)||(cantidad>stock)) {
alert(`no tenemos stock suficiente`);
} else {
    stock=stock-cantidad
    for (stock; stock >= 0; stock=stock-cantidad) {

        console.log(`quedan ${stock} almohadones`);
        //lo ponemos en console.log, para que la informacion se solo interna a la empresa
        cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));
    }
}


