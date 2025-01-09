import Hero from "../Hero/Hero";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorite.module.scss";
import { getFavoritesCards } from "../../redux/cardsRedux";

const Favorite = () => {
  const cards = useSelector(getFavoritesCards);

  const renderCards = () => {
    if (cards.length === 0) return "No cards...";
    return (
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            id={card.id}
          />
        ))}
      </ul>
    );
  };

  return (
    <>
      <Hero title={"Favorite"} />
      <article className={styles.column}>{renderCards()}</article>
    </>
  );
};

export default Favorite;
