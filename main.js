document.addEventListener("DOMContentLoaded",()=>{
    cargarCarritoStorage();
    renderProductos();
    renderCarrito();

});

const usuario = {
    nombre: 'Juan Marquez',
    edad: 30
};

const registroIngreso = usuario.edad >= 18 && new Date;

console.log(registroIngreso);


const PRODUCTOS = [
    {
        id: 1,
        nombre: 'Alfajor Jorgito',
        precio: 200
    },
    {
        id: 2,
        nombre: 'Alfajor Jorgelin',
        precio: 300
    },
    {
        id: 3,
        nombre: 'Alfajor Grandote',
        precio: 250
    },
    {
        id: 4,
        nombre: 'Alfajor Milka',
        precio: 350
    }
]


const d = document;
const CARRITO = [];

function renderProductos (){

    const $productos = d.getElementById('section');

    PRODUCTOS.forEach (({nombre, precio, id}) => {
        const $div = d.createElement ('div');
        $div.innerHTML = `
            <h3>${nombre}</h3>
            <p>${precio}</p>
            <button>Agregar</button>
        `
        $productos.appendChild($div);

        $div.querySelector('button').addEventListener('click',() =>{
            agregarProducto(id);
        });
    })

}



function agregarProducto (id) {
    const producto = PRODUCTOS.find((producto) => producto.id === id);
    const productoCarrito = CARRITO.find((producto) => producto.id === id);

    if(productoCarrito) {
        productoCarrito.cantidad++;
    } else {
        CARRITO.push({
            ...producto,
            cantidad: 1    
        });
    }
    renderCarrito();
    guardarCarritoStorage();
}

function renderCarrito (){

    const $car = d.getElementById('carrito');

    $car.innerHTML = "";

    CARRITO.forEach(({nombre, precio, cantidad})=>{

        const $div = d.createElement('div');
        $div.innerHTML = `
        <h3>${nombre}</h3>
        <p>${precio}</p>
        <p>Cantidad:${cantidad}</p>
    `

    $car.appendChild($div);
    })
}

function guardarCarritoStorage() {

    localStorage.setItem('carrito', JSON.stringify(CARRITO));
}

function cargarCarritoStorage() {
    
    const carrito = localStorage.getItem('carrito');

    if(carrito) {
        CARRITO.push(...JSON.parse(carrito));
    }
}






