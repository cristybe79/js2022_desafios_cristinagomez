let opcion = prompt("elija su opcion. del 1 al 5");
let cantidad = 0



const cpr1 = 1000;
const cpr2 = 1200;
const cpr3 = 1100;
const cpr4 = 1250;
const cpr5 = 1300;

let sta1 = 10;
let sta2 = 7;
let sta3 = 9;
let sta4 = 7;
let sta5 = 5;

switch (opcion) {
    case "1":
        cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));

        if (sta1 < cantidad) {
            alert(`no tenemos stock suficiente`);
            cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));
        } else {
            alert("el total es " + cantidad * cpr1);
            sta1 = sta1 - cantidad
            console.log(`quedan ${sta1}`)
        }

        break;
    case "2":
        cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));

        if (sta2 < cantidad) {
            alert(`no tenemos stock suficiente`);
            cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));
        } else {
            alert("el total es " + cantidad * cpr2);
            sta2 = sta2 - cantidad;
            console.log(`quedan ${sta2}`);
        }
        break;
    case "3":
        cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));

        if (sta3 < cantidad) {
            alert(`no tenemos stock suficiente`);
            cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));
        } else {
            alert("el total es " + cantidad * cpr3);
            sta3 = sta3 - cantidad;
            console.log(`quedan ${sta3}`);
        }
        break;
    case "4":
        cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));

        if (sta4 < cantidad) {
            alert(`no tenemos stock suficiente`);
            cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));
        } else {
            alert("el total es " + cantidad * cpr4);
            sta4 = sta4 - cantidad;
            console.log(`quedan ${sta4}`);
        }
        break;
    case "5":
        cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));

        if (sta5 < cantidad) {
            alert(`no tenemos stock suficiente`);
            cantidad = parseInt(prompt(`Cuantos Almohadones va a llevar `));
        } else {
            alert("el total es " + cantidad * cpr5);
            sta5 = sta5 - cantidad;
            console.log(`quedan ${sta5}`);
        }
        break;    
    default:
        alert("favor elija una opcion 1 - 2 -3 -4 -5");
        break;
}


