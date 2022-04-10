const catalogoHogar = [
    {
        id: "A001",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "rayado-azul",
        stock: 20,
        precio: 1000,
        costo:700,
        img: "./img/a0011.jpg",
    },
    {
        id: "A002",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "rayado-negro-gris",
        stock: 20,
        precio: 1000,
        costo:700,
        img: "./img/a0012.jpg",
    },
    {
        id: "A003",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "set almohadones",
        stock: 20,
        precio: 3000,
        costo: 2200,
        img: "./img/a0012.jpg",
    },
    {
        id: "A004",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "estampado-paris",
        stock: 20,
        precio: 1500,
        costo: 1100,
        img: "./img/a0012.jpg",
    },
    {
        id: "A005",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "liso beige",
        stock: 20,
        precio: 1500,
        costo:1100,
        img: "./img/a0012.jpg",
    },
    {
        id: "A006",
        categoria: "decoracion",
        tipo: "almohadon",
        color: "liso gris",
        stock: 20,
        precio: 1500,
        costo:1100,
        img: "./img/a0012.jpg",
    },
    {
        id: "I001",
        categoria: "ILUMINACION",
        tipo: "Lampara de pie",
        color: "base madera",
        stock: 10,
        precio: 7000,
        costo:1100,
        img: "./img/i001.jpg",
    },
    {
        id: "I002",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        color: "red negra moderna",
        stock: 15,
        precio: 3000,
        costo:1100,
        img: "./img/i002.jpg",
    },
    {
        id: "I003",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        color: "clasica",
        stock: 5,
        precio: 10000,
        costo:9000,
        img: "./img/i003.jpg",
    },
    {
        id: "I004",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        color: "modera edison redondas",
        stock: 5,
        precio: 12000,
        costo:10000,
        img: "./img/i004.jpg",
    },
    {
        id: "A005",
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        color: "base metal blanco",
        stock: 25,
        precio: 2000,
        costo:1500,
        img: "./img/i005.jpg",
    },
    {
        id: "A006",
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        color: "base madera blanco",
        stock: 20,
        precio: 2500,
        costo:1700,
        img: "./img/i006.jpg",
    },
];

let carrito =[]
let pdtoComprado = prompt('indique el id del articulo que desea llevar');
let cantidad = parseInt(prompt(`Cuantos desea llevar`));

const agregaCarrito = () => {
    let tipo = catalogoHogar.find(el => el.id == pdtoComprado)
    let prod = new Producto(tipo.id, tipo.precio, cantidad)
    carrito.push(prod)
    
}
agregaCarrito()

function Producto(id,precio,cantidad) {
    this.id = id
    this.precio = precio
    this.cantidad = cantidad
    this.total= function(){this.precio*this.cantidad}
}

let deseaAgregar = confirm('desea agregar otro articulo al carrito')
console.log(carrito)

do {
    pdtoComprado = prompt('indique el id del articulo que desea llevar');
    cantidad = parseInt(prompt(`Cuantos desea llevar`));    
    agregaCarrito()
    deseaAgregar = confirm('desea agregar otro articulo al carrito')
    
} while (deseaAgregar == true)

