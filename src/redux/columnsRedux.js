import shortid from "shortid";

//selectors
export const getAllColumns = (store) => store.columns;
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((col) => col.listId === listId);
export const getColumnId = (store, columnId) => columnId;

// actions
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName("ADD_COLUMN");
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });
// action creators
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
