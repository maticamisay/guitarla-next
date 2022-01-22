import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" />
          <div >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet imperdiet sollicitudin. Nulla nec tortor leo. Donec
              iaculis dui nec sollicitudin vehicula. Vivamus ligula massa,
              eleifend id convallis in, hendrerit sed metus. Donec dolor magna,
              fringilla sit amet accumsan at, fringilla vitae neque. Vestibulum
              tristique dui eleifend mauris laoreet, sed ultrices libero
              </p>
              <p>
              commodo. In hac habitasse platea dictumst. Vestibulum pellentesque
              risus ex, vitae sagittis nisi volutpat eu. Aenean ornare elit eget
              mauris auctor, vel dignissim massa facilisis. Aenean aliquet nibh
              purus, ut pretium nulla lobortis id. In eu tristique odio. Morbi
              sed pulvinar mi. Pellentesque diam lorem, placerat vel arcu id,
              elementum varius est. Sed maximus ex nec dui sagittis auctor.
              Morbi faucibus arcu at augue condimentum, non scelerisque tellus
              varius.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
