const url = "http://localhost:4005/carritoCompras"

//...............................................................

export const printProducts = (data) => {

    document.querySelector('#containerCategorias').style.display = "none";
    document.querySelector('.detalles').style.display = "none";
    document.querySelector('.tarjetasCategoria').style.display = "block";
    const template = document.querySelector('#templateTarjetas').content;
    const TarjetasCategoria = document.querySelector('.containerTarjetas');
    TarjetasCategoria.innerHTML = '';
    const fragment = document.createDocumentFragment();

    data.forEach(data => {
        const { name: nombre,
            image: ruta,
            id: id,
            description: descript,
            price: precio,
            category: categoria } = data;



        template.querySelector("img").setAttribute("src", ruta);
        template.querySelector("p").textContent = descript;
        template.querySelector("h5").textContent = precio;
        template.querySelector("button").textContent = ('Ver mas');
        template.querySelector("button").dataset.id = id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    TarjetasCategoria.appendChild(fragment);
}

//...............................................................



export const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.cardCategoria button');

    botones.forEach(btn => {
        btn.addEventListener('click', () => {

            const productos = data.find(item => item.id === parseInt(btn.dataset.id))
            sessionStorage.setItem(' seleccion', JSON.stringify(productos));//guardando en  sessionStorage
            const { description, id, image, price } = productos; // desestructurando objeto

            document.querySelector('.tarjetasCategoria').style.display = "none";
            document.querySelector('.carritoCompras').style.display = "none";
            document.querySelector('.detalles').style.display = "block";
            document.querySelector('.DetalleProductos').style.display = "block";




            let imagen = document.querySelector('#imgDetalleProducto');
            imagen.setAttribute('src', `${image}`);
            let textDetalle = document.querySelector('#textoDetalle');
            textDetalle.textContent = description;
            let precio = document.querySelector('#precioDetalle');
            precio.textContent = (`${price}`)
            let boton = document.querySelector('.addBag');
            boton.setAttribute('dataset.id', `${id}`)
        })
    })
}


//....................................................................


export const agregarCarrito = async producto => {

    try {
        await fetch("http://localhost:4005/carritoCompras", {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
            .then(() => Swal.fire(
                'Felicitaciones!',
                'Producto Agregado!',
                'success'
        ));
    } catch (Error) {
        console.log(Error);
    }

};




// ...........................................................................

export const carritoCompras = (data) => {
    document.querySelector('#containerCategorias').style.display = "none";
    document.querySelector('.tarjetasCategoria').style.display = "none";
    document.querySelector('.detalles').style.display = "none";
    document.querySelector('.DetalleProductos').style.display = "none";
    document.querySelector('.carritoCompras').style.display = "block";

    const template = document.querySelector('.templateCarrito').content;
    const carritoCompras = document.querySelector('.carritoCompras');
    carritoCompras.innerHTML = '';
    const fragment = document.createDocumentFragment();



    data.forEach(data => {
        const { name: nombre,
            image: ruta,
            id: id,
            description: descript,
            price: precio,
            category: categoria } = data;

        template.querySelector("img").setAttribute("src", ruta);
        template.querySelector("h5").textContent = (nombre);
        template.querySelector("p").textContent = (descript);
        template.querySelector("small").textContent = (precio);
        template.querySelector("button").dataset.id = id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    carritoCompras.appendChild(fragment);
}


//.................................................................................


export const deleteProducto = url => {
    Swal.fire({
        title: "Seguro deseas eliminar este producto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí eliminar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await fetch(url, { method: "DELETE" });
            } catch (Error) {
                console.log(Error);
            };
        }
    })
};
















