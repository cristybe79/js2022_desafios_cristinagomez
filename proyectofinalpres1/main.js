const catalogoHogar = [
    {
        codArt: "A001",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "rayado-azul",
        stock: 20,
        precio: 1000,
        costo: 700,
        img: "./img/a0011.jpg",
    },
    {
        codArt: "A002",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "rayado-negro-gris",
        stock: 20,
        precio: 1000,
        costo: 700,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "A003",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "set almohadones",
        stock: 20,
        precio: 3000,
        costo: 2200,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "A004",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "estampado-paris",
        stock: 20,
        precio: 1500,
        costo: 1100,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "A005",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "liso beige",
        stock: 20,
        precio: 1500,
        costo: 1100,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "A006",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "liso gris",
        stock: 20,
        precio: 1500,
        costo: 1100,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "I001",
        categoria: "ILUMINACION",
        tipo: "Lampara de pie",
        color: "base madera",
        stock: 10,
        precio: 7000,
        costo: 1100,
        img: "./img/i001.jpg",
    },
    {
        codArt: "I002",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        color: "red negra moderna",
        stock: 15,
        precio: 3000,
        costo: 1100,
        img: "./img/i002.jpg",
    },
    {
        codArt: "I003",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        color: "clasica",
        stock: 5,
        precio: 10000,
        costo: 9000,
        img: "./img/i003.jpg",
    },
    {
        codArt: "I004",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        color: "modera edison redondas",
        stock: 5,
        precio: 12000,
        costo: 10000,
        img: "./img/i004.jpg",
    },
    {
        codArt: "I005",
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        color: "base metal blanco",
        stock: 25,
        precio: 2000,
        costo: 1500,
        img: "./img/i005.jpg",
    },
    {
        codArt: "I006",
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        color: "base madera blanco",
        stock: 20,
        precio: 2500,
        costo: 1700,
        img: "./img/i006.jpg",
    },
];
//Saludo
let nombreCliente = prompt(`Buenos días!, ingresa tu nombre`);

//Cliente
const saludar = () => {
    alert(`hola ${nombreCliente} Como estas?`);
};
saludar();

//Carrito
let carrito = []


//Proceso de Compra
let deseaAgregar = confirm('desea realizar una compra carrito')
if (deseaAgregar === false) {
    alert(`Bienvenido a nuestra pagina mire nuestro Catalogo`)
} else {
    let pdtoComprado = prompt('indique el codArt del articulo que desea llevar');
    let cantidad = parseInt(prompt(`Cuantos desea llevar`));

    const agregaCarrito = () => {
        let tipo = catalogoHogar.find(el => el.codArt == pdtoComprado)
        let prod = new Producto(tipo.codArt, tipo.precio, cantidad)
        carrito.push(prod)

    }
    agregaCarrito()

    function Producto(codArt, precio, cantidad) {
        this.codArt = codArt
        this.precio = precio
        this.cantidad = cantidad
        this.total = precio * cantidad
    }

    console.log(carrito)

    let deseaAgregarOtro = confirm('desea agregar otro articulo al carrito')
    if (deseaAgregarOtro === true) {
        pdtoComprado = prompt('indique el codArt del articulo que desea llevar');
        cantidad = parseInt(prompt(`Cuantos desea llevar`));
        deseaAgregarOtro = confirm('desea agregar otro articulo al carrito')

        agregaCarrito()
    } else {
        alert(`muchas gracias por su compra`)

    }
}





let contadorCarrito = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
let totalCarrito = carrito.reduce((acc, prod) => acc += prod.total, 0)

console.log(contadorCarrito)
console.log(totalCarrito)
// let mapeoCarrito = carrito.map()
// let index = catalogoHogar.indexOf(item)






alert(`Muchas gracias por su compra ${nombreCliente} el total de su compra es ${totalCarrito}`)