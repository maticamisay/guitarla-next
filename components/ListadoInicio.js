import Guitarra from "./Guitarra";
import styles from "../styles/Listado.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Listado = ({ guitarras }) => {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const size = useWindowSize();
  const guitarrasInicio = [];
  const cantidadMostrar = 3;
  if (size.width > 992) {
    cantidadMostrar = 6;
  } else if (size.width > 768) {
    cantidadMostrar = 4;
  } else if (size.width <= 768) {
    cantidadMostrar = 3;
  }

  let cant = 0;
  for (let i = 0; cant < cantidadMostrar; cant++) {
    guitarrasInicio.push(guitarras[cant]);
  }
  return (
    <>
      <div className={styles.listado}>
        {guitarrasInicio.map((guitarra) => (
          <Guitarra key={guitarra.url} guitarra={guitarra} />
        ))}
      </div>
      <Link href="/tienda">
        <a className={styles.verMas}>Ver más</a>
      </Link>
    </>
  );
};

export default Listado;
