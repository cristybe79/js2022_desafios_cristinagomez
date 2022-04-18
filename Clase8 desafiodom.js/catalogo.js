const catalogoHogar = [
    {
        codArt: "A001",
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "rayado-azul",
        stock: 20,
        precio: 1000,
        costo: 700,
        img: "./img/a0011.jpg",
    },
    {
        codArt: "A002",
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "rayado-negro-gris",
        stock: 15,
        precio: 1000,
        costo: 700,
        img: "./img/a0012.jpg",
    },
    {
        codArt: "A003",
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "set almohadones",
        stock: 17,
        precio: 3000,
        costo: 2200,
        img: "./img/a003.jpg",
    },
    {
        codArt: "A004",
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "estampado-paris",
        stock: 13,
        precio: 1500,
        costo: 1100,
        img: "./img/a004.jpg",
    },
    {
        codArt: "A005",
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "liso beige",
        stock: 11,
        precio: 1500,
        costo: 1100,
        img: "./img/a005.jpg",
    },
    {
        codArt: "A006",
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "liso gris",
        stock: 10,
        precio: 1500,
        costo: 1100,
        img: "./img/a006.jpg",
    },
    {
        codArt: "I001",
        categoria: "ILUMINACION",
        tipo: "Lampara de pie",
        descripcion: "base madera",
        stock: 10,
        precio: 7000,
        costo: 1100,
        img: "./img/i001.jpg",
    },
    {
        codArt: "I002",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        descripcion: "red negra moderna",
        stock: 15,
        precio: 3000,
        costo: 1100,
        img: "./img/i002.jpg",
    },
    {
        codArt: "I003",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        descripcion: "clasica",
        stock: 5,
        precio: 10000,
        costo: 9000,
        img: "./img/i003.jpg",
    },
    {
        codArt: "I004",
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        descripcion: "modera edison redondas",
        stock: 5,
        precio: 12000,
        costo: 10000,
        img: "./img/i004.jpg",
    },
    {
        codArt: "I005",
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        descripcion: "base metal blanco",
        stock: 25,
        precio: 2000,
        costo: 1500,
        img: "./img/i005.jpg",
    },
    {
        codArt: "I006",
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        descripcion: "base madera blanco",
        stock: 20,
        precio: 2500,
        costo: 1700,
        img: "./img/i006.jpg",
    },
];


const contenedorProductos = document.getElementById('catalogoCompleto')


catalogoHogar.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "estiloCard"


    div.innerHTML = `
        <div>
        <p class="card-text rojo">${producto.categoria}</p>
        </div>
        <img src = ${producto.img}    class="card-img-top" alt = "..." >
        <div class="card-body">
            <h5 class="card-title grande">${producto.tipo}</h5>
            <p class="card-text rojo">${producto.descripcion}</p>
            <p class="card-text rojo">Precio: $${producto.precio}</p>
            <a href="#" class="btn btn-light">ver detalle</a>
        </div>

        
        
        `

    contenedorProductos.appendChild(div)
})


