import Layout from "../components/Layout";
import ListadoInicio from "../components/ListadoInicio";

export default function Home({guitarras}) {
  return (
    <div>
      <Layout pagina="inicio">
        <main className="contenedor">
          <h1 className="heading">Un poco de nuestra coleccion</h1>
          <ListadoInicio
            guitarras={guitarras}
          />
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}
