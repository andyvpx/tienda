import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

//import HolaMundo from './components/HolaMundo';

function App() {

  // Crear listado de productos
  // eslint-disable-next-line no-unused-vars
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50},
    { id: 2, nombre: 'Camisa VueJS', precio: 40},
    { id: 3, nombre: 'Camisa NodeJS', precio: 30},
    { id: 4, nombre: 'Camisa Angular', precio: 20},

  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header 
        titulo='Tienda virtual'
        />  
        <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto       
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}   // llamar los props igual que los valores que está pasando para no perderse 
          />
        ))}
        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        ></Carrito>
        <Footer 
        fecha={fecha}
        />
        </Fragment>
  );
}

export default App;
