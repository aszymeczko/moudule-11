import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/store";
import clsx from "clsx";

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
