import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto

    // Agregar producto al carrito
    const seleccionarProducto = id => {
        // como traer la información del id
        const producto = productos.filter(producto => producto.id === id)[0];   // el [0] permite traer toda la información del arreglo en la consola
        agregarProducto([
            ...carrito,  // los 3 puntos... se le conoce como rest operator es una forma de clonar/hacer una copia de un objeto o arreglo 0o estado anterior
            producto
        ]);

    }

    // Elimina producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);   // el [0] permite traer toda la información del arreglo en la consola
        // Colocar los productos en el state
        agregarProducto(productos);
        

    }
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            {productos 
            ?
                <button type="button"
                        onClick={ () => seleccionarProducto(id)}
                >Comprar</button>
            :
                (
                    <button type="button" onClick={ () => eliminarProducto(id) }>Eliminar</button>
                )
            }
        </div>
    );
}
 
export default Producto;