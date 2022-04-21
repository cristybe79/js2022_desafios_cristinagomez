const catalogoHogar = [
    {
        codArt: 01,
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "rayado-azul",
        stock: 20,
        precio: 1000,
        costo: 700,
        img: "./img/a0011.jpg",
    },
    {
        codArt: 02,
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "rayado-negro-gris",
        stock: 15,
        precio: 1000,
        costo: 700,
        img: "./img/a0012.jpg",
    },
    {
        codArt:03 ,
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "set almohadones",
        stock: 17,
        precio: 3000,
        costo: 2200,
        img: "./img/a003.jpg",
    },
    {
        codArt:04 ,
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "estampado-paris",
        stock: 13,
        precio: 1500,
        costo: 1100,
        img: "./img/a004.jpg",
    },
    {
        codArt:05 ,
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "liso beige",
        stock: 11,
        precio: 1500,
        costo: 1100,
        img: "./img/a005.jpg",
    },
    {
        codArt: 06,
        categoria: "decoracion",
        tipo: "almohadon",
        descripcion: "liso gris",
        stock: 10,
        precio: 1500,
        costo: 1100,
        img: "./img/a006.jpg",
    },
    {
        codArt:07 ,
        categoria: "ILUMINACION",
        tipo: "Lampara de pie",
        descripcion: "base madera",
        stock: 10,
        precio: 7000,
        costo: 1100,
        img: "./img/i001.jpg",
    },
    {
        codArt:08 ,
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        descripcion: "red negra moderna",
        stock: 15,
        precio: 3000,
        costo: 1100,
        img: "./img/i002.jpg",
    },
    {
        codArt:09 ,
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        descripcion: "clasica",
        stock: 5,
        precio: 10000,
        costo: 9000,
        img: "./img/i003.jpg",
    },
    {
        codArt:10 ,
        categoria: "ILUMINACION",
        tipo: "Lampara Colgante Techo",
        descripcion: "modera edison redondas",
        stock: 5,
        precio: 12000,
        costo: 10000,
        img: "./img/i004.jpg",
    },
    {
        codArt:11 ,
        categoria: "ILUMINACION",
        tipo: "Lampara Velador",
        descripcion: "base metal blanco",
        stock: 25,
        precio: 2000,
        costo: 1500,
        img: "./img/i005.jpg",
    },
    {
        codArt:12 ,
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
const btnsuma = document.querySelector('#btnsuma') 
///carrito
const agregaCarrito = document.getElementById('agrega-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const total = document.getElementById('total')

const carrito = []



///recorre array catalogo para mostrarlo en card
const mostrarCatalogo = (arrayCat) => {
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
        <button onclick="agregarCarrito(${producto.codArt})" class="boton-agregar">Agregar</button>
        </div>

        
        
        `

    contenedorProductos.appendChild(div)
})

}
mostrarCatalogo()



//agregar al Carrito
const agregarCarrito = (itemAgregado) => {
    const itemCarrito = carrito.find(el => el.codArt == itemAgregado)

    if (itemCarrito) {
        itemCarrito.cantidad++

    } else {
        const producto = catalogoHogar.find((prod) => prod.codArt == itemAgregado)

        carrito.push({
            codArt: producto.codArt,
            categoria: producto.categoria,
            descripcion:producto.descripcion,
            tipo: producto.tipo,
            precio: producto.precio,
            cantidad: 1

        })
    }
    actualizaCarrito()
}



const actualizaCarrito = () => {
    agregaCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('itemCarrito')

        div.innerHTML = `
                <p>${prod.codArt}</p>
                <p>${prod.descripcion}</p>
                <p>${prod.categoria}</p>
                <p>Precio: $${prod.precio}</p>
            
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="agregaCarrito(${prod.codArt})" class="boton-agregar-c"><i class="fas fa-plus-square"></i></button>                
                <button onclick="eliminarProducto(${prod.codArt})" class="boton-eliminar"><i class="fas fa-minus-square"></i></button>


            `

        agregaCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
}        
        
        //========================= modales
const modalAbrir = document.getElementById('modalAbrirCarrito')
        const modalCerrar = document.getElementById('modal-cerrar')
        const modalContenedor = document.getElementsByClassName('modal-contenedor')[0]
        
        
        modalAbrir.addEventListener('click', () => {
            modalContenedor.classList.add('modal-active')
        })
        
        modalCerrar.addEventListener('click', () => {
            modalContenedor.classList.remove('modal-active')
        })

