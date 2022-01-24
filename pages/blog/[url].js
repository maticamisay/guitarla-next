import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada;
  return (
    <Layout
      pagina={titulo}
    >
      <main className="contenedor">
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada[0],
    },
  };
}

export default EntradaBlog;
