//selectors
export const getSearchString = (state) => state.searchString;

// actions
const createActionName = (actionName) => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName("UPDATE_SEARCHSTRING");
export const updateSearchString = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

const searchStringRedux = (statePart = "", action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringRedux;