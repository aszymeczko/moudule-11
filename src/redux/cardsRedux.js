import shortid from "shortid";

//selectors
export const getAllCards = (state) => state.cards;
export const getFavoritesCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);

const createActionName = (actionName) => `app/cards/${actionName}`;
const ADD_CARD = createActionName("ADD_CARD");
const TOGGLE_CARD_FAVORITE = createActionName("TOGGLE_CARD_FAVORITE");
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});
const cardsRedux = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card,
      );
    default:
      return statePart;
  }
};

export default cardsRedux;
