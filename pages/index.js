import Curso from "../components/Curso";
import Layout from "../components/Layout";
import ListadoInicio from "../components/ListadoInicio";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {
  return (
    <div>
      <Layout pagina="inicio">
        <main className="contenedor">
          <h1 className="heading">Un poco de nuestra coleccion</h1>
          <ListadoInicio guitarras={guitarras} />
        </main>
        <Curso curso={curso} />
        <section className="contenedor">
          <ListadoBlog entradas={entradas} />
        </section>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  };
}
