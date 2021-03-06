import Entrada from "../components/Entrada";
import styles from '../styles/Blog.module.css'
const ListadoBlog = ({entradas}) => {
  let entradasArr = Array.from(entradas);
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entradasArr.map((entrada) => (
          <Entrada key={entrada._id} entrada={entrada} />
        ))}
      </div>
    </>
  );
};

export default ListadoBlog;
