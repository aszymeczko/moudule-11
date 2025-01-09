import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import { strContains } from "../components/utils/strContains";
import { createSelector } from "reselect";
import listsReducer from "./listsRedux";
import cardsRedux, { getAllCards } from "./cardsRedux";
import searchStringRedux, { getSearchString } from "./searchStringRedux";
import columnsReducer, { getColumnId } from "./columnsRedux";

export const getUsersSelector = createSelector(
  [getAllCards, getSearchString, getColumnId],
  (cards, searchString, columnId) =>
    cards.filter(
      (card) =>
        card.columnId === columnId && strContains(card.title, searchString),
    ),
);

const subReducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsRedux,
  searchString: searchStringRedux,
};

const reducer = combineReducers(subReducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
