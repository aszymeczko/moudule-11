import styles from "./List.module.scss";
import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SearchForm from "../SearchForm/SearchForm";
import { Navigate } from "react-router-dom";
import { getListById } from "../../redux/listsRedux";
import { getColumnsByList } from "../../redux/columnsRedux";

const List = () => {
  const { listId } = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));
  if (!listData) return <Navigate to="/" />;
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        “Interesting things I want to check out”.
      </p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
          />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
