import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { toggleCardFavorite, deleteCard } from "../../redux/cardsRedux";

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const handleDelete = () => {
    dispatch(deleteCard(props.id));
  };

  return (
    <li className={clsx(styles.card, props.isFavorite ? styles.active : "")}>
      {props.title}
      <div className={styles.buttonsWrapper}>
        <button className={styles.addToFavorite} onClick={() => handleClick()}>
          <i className="fa fa-star-o"></i>
        </button>
        <button className={styles.remove} onClick={() => handleDelete()}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
