import { printProducts, carritoCompras, detectarBotones, agregarCarrito, deleteProducto } from "../modules/printProducts.js";
import { getData } from "../modules/getData.js";

const url = "http://localhost:4005"
const electro = document.getElementById("electro");
const carrito = document.querySelector('#carrito')
const botonCarrito = document.querySelector(".addBag");


const borrarDeCarrito = document.querySelector(".botonVaciar");

// ......................................................................

// alert(imgProducto)

sessionStorage.getItem('seleccion');

let aValue = sessionStorage;

console.log( aValue)




botonCarrito.addEventListener('click', e => {
    

    // const aValue ={
    //     category: category
    // }

    agregarCarrito(aValue)
});


// .......................................................................




// .......................................................................


carrito.addEventListener('click', async () => {
    // e.preventDefault();
    try {
        const data = await getData(url + "/carritoCompras");  // cambiar url + categoria
        carritoCompras(data)
    } catch (error) {
        console.log("ERROR")
    }
});



// ........................................................................

electro.addEventListener('click', async () => {
    try {
        const data = await getData(url + "/electronics");  // cambiar url + categoria
        printProducts(data)
        detectarBotones(data)
        // agregarCarrito(data)
    } catch (error) {
        console.log("ERROR")
    }
});

// .........................................................................

HomeGarden.addEventListener('click', async () => {
    try {
        const data = await getData(url + "/garden");  // cambiar url + categoria
        printProducts(data)
        detectarBotones(data)
        // agregarCarrito(data)
    } catch (error) {
        console.log("ERROR")
    }
});

// .........................................................................


collectibles.addEventListener('click', async () => {
    try {
        const data = await getData(url + "/collectibles");  // cambiar url + categoria
        printProducts(data)
        detectarBotones(data)
        // agregarCarrito(data)
    } catch (error) {
        console.log("ERROR")
    }
});

// .........................................................................

if (borrarDeCarrito) {
    borrarDeCarrito.addEventListener('click', (e) => {
        alert('btn clicked');
    });
}


// window.onload=function(){
//     const borrarDeCarrito = document.querySelector(".botonVaciar");
//     borrarDeCarrito.addEventListener("click",console.log('btn clicked'));
// }

// document.addEventListener('DOMContentLoaded', function () {
//     borrarDeCarrito.addEventListener('click', console.log('btn clicked'));
// });

// borrarDeCarrito.addEventListener("click", () => {
//     console.log('eyyyyyyyyyyyyyyyy');
//     deleteProducto(`http://localhost:4005/carritoCompras/${id.value}`)

// });

