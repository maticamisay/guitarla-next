import Curso from "../components/Curso";
import Layout from "../components/Layout";
import ListadoInicio from "../components/ListadoInicio";

export default function Home({ guitarras, curso }) {
  return (
    <div>
      <Layout pagina="inicio">
        <main className="contenedor">
          <h1 className="heading">Un poco de nuestra coleccion</h1>
          <ListadoInicio guitarras={guitarras} />
        </main>
        <Curso 
          curso={curso}
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
  ]);

  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
    },
  };
}
