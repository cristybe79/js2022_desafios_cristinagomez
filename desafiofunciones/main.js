// Calcular el precio de venta de un articulo

let nombreCliente = prompt(`Buenos días!, ingresa tu nombre`);

const saludar = () => {
    alert(`hola ${nombreCliente} Como estas?`);
};
saludar();

const cpr1 = 1000;
const cpr2 = 1200;
const cpr3 = 1100;
const cpr4 = 1250;
const cpr5 = 1300;

let compra = prompt(`que producto desea llevar?`);
let cantidad = parseInt(prompt(`Cuantos desea llevar`));

function ventas() {
    switch (compra) {
        case "A001":
            stockA001();
            break;
        case "A002":
            stockA002();
            break;
        case "A003":
            stockA003();
            break;
        case "A004":
            stockA004();
            break;
        case "A005":
            stockA005();
            break;
        default:
            alert(" favor consulte nuestro catálogo nuevamente");
            break;
    }
}

const stockA001 = () => {
    let stA001 = 20;

    if (cantidad < stA001) {
        sttA001 = stA001 - cantidad;
        console.log(`quedan ${sttA001} de ${compra}`);
        cpraA001();
    } else {
        alert(`lo sentimos no tenemos suficiente stock`);
        cantidad = parseInt(prompt(`Cuantos desea llevar`));
        ventas();
    }
};

const stockA002 = () => {
    let stA002 = 15;

    if (cantidad < stA002) {
        sttA002 = stA002 - cantidad;
        console.log(`quedan ${sttA002} de ${compra}`);
        cpraA001();
    } else {
        alert(`lo sentimos no tenemos suficiente stock`);
        cantidad = parseInt(prompt(`Cuantos desea llevar`));
        ventas();
    }
};

const stockA003 = () => {
    let stA003 = 25;

    if (cantidad < stA003) {
        sttA003 = stA003 - cantidad;
        console.log(`quedan ${sttA003} de ${compra}`);
        cpraA003();
    } else {
        alert(`lo sentimos no tenemos suficiente stock`);
        cantidad = parseInt(prompt(`Cuantos desea llevar`));
        ventas();
    }
};

const stockA004 = () => {
    let stA004 = 10;

    if (cantidad < stA004) {
        sttA004 = stA004 - cantidad;
        console.log(`quedan ${sttA004} de ${compra}`);
        cpraA004();
    } else {
        alert(`lo sentimos no tenemos suficiente stock`);
        cantidad = parseInt(prompt(`Cuantos desea llevar`));
        ventas();
    }
};

const stockA005 = () => {
    let stA005 = 5;

    if (cantidad < stA005) {
        sttA005 = stA005 - cantidad;
        console.log(`quedan ${sttA005} de ${compra}`);
        cpraA004();
    } else {
        alert(`lo sentimos no tenemos suficiente stock`);
        cantidad = parseInt(prompt(`Cuantos desea llevar`));
        ventas();
    }
};

const cpraA001 = () => {
    const totalA001 = cpr1 * cantidad;

    alert(`el precio total es ${totalA001}`);
    console.log(totalA001);
};

const cpraA002 = () => {
    const totalA002 = cpr2 * cantidad;

    alert(`el precio total es ${totalA002}`);
    console.log(totalA002);
};
const cpraA003 = () => {
    const totalA003 = cpr3 * cantidad;

    alert(`el precio total es ${totalA003}`);
    console.log(totalA003);
};

const cpraA004 = () => {
    const totalA004 = cpr4 * cantidad;

    alert(`el precio total es ${totalA004}`);
    console.log(totalA004);
};

const cpraA005 = () => {
    const totalA005 = cpr5 * cantidad;
    console.log(totalA005);

    alert(`el precio total es ${totalA005}`);
};

ventas();
