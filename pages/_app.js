import "../styles/normalize.css";
import "../styles/globals.css";
import { useState } from "react";
import Carrito from "./carrito";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    if (carrito.some((articulo) => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad + articulo.cantidad;
        }
        return articulo;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
    />
  );
}

export default MyApp;
