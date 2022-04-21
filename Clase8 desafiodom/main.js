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
        stock: 15,
        precio: 1000,
        costo: 700,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "A003",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "set almohadones",
        stock: 17,
        precio: 3000,
        costo: 2200,
        img: "./img/a003.jpg",
    },
    {
        codArt: "A004",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "estampado-paris",
        stock: 13,
        precio: 1500,
        costo: 1100,
        img: "./img/a004.jpg",
    },
    {
        codArt: "A005",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "liso beige",
        stock: 11,
        precio: 1500,
        costo: 1100,
        img: "./img/a005.jpg",
    },
    {
        codArt: "A006",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "liso gris",
        stock: 10,
        precio: 1500,
        costo: 1100,
        img: "./img/a006.jpg",
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
// //Saludo
// let nombreCliente = prompt(`Buenos días!, ingresa tu nombre`);

// //Cliente
// const saludar = () => {
//     alert(`hola ${nombreCliente} Como estas?`);
// };
// saludar();

//Carrito
let carrito = []




// const agregaCarrito = () => {
//     let tipo = catalogoHogar.find(el => el.codArt == pdtoComprado)
//     console.log(tipo.stock)

//     let prod = new Producto(tipo.codArt, tipo.precio, cantidad)
//     carrito.push(prod)

// }
// agregaCarrito()

function Producto(codArt, precio, cantidad) {
    this.codArt = codArt
    this.precio = precio
    this.cantidad = cantidad
    this.total = precio * cantidad
}

console.log(carrito)







let contadorCarrito = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
let totalCarrito = carrito.reduce((acc, prod) => acc += prod.total, 0)

console.log(contadorCarrito)
console.log(totalCarrito)
// let mapeoCarrito = carrito.map()
// let index = catalogoHogar.indexOf(item)


const contenedorCategory1 = document.getElementById('category1')
const mostrarCategoriasDecoracion = () => {
    const filtrado = catalogoHogar.filter((producto) => producto.categoria === "decoracion")
    console.log(filtrado)
    contenedorCategory1.innerHTML = ''
    filtrado.forEach((cat) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src = ${cat.img} alt="${cat.tipo}"/>                
        `
        contenedorCategory1.appendChild(div)
    })
}
mostrarCategoriasDecoracion()

const contenedorCategory = document.getElementById('category2')
const mostrarCategoriasIluminacion = () => {
    const filtrado = catalogoHogar.filter((producto) => producto.categoria === "ILUMINACION")
    console.log(filtrado)
    contenedorCategory.innerHTML = ''
    filtrado.forEach((cat) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src = ${cat.img} alt="${cat.tipo}"/>                
        `
        contenedorCategory.appendChild(div)
    })
}
mostrarCategoriasIluminacion()