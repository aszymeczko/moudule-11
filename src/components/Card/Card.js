import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { toggleCardFavorite } from "../../redux/cardsRedux";

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={clsx(styles.card, props.isFavorite ? styles.active : "")}>
      {props.title}
      <button onClick={() => handleClick()}>
        <i className="fa fa-star-o"></i>
      </button>
    </li>
  );
};

export default Card;
