const mainState = {
  eventData: [],
};

const Reducer = (state = mainState, action) => {
  switch (action.type) {
    case "store":
      return { ...state, eventData: action.payload };
    case "add":
      return { ...state, eventData: action.payload };
    case "edit":
      return { ...state, eventData: action.payload };
    case "delete":
      return { ...state, eventData: action.payload };

    default:
      return state;
  }
};

export default Reducer;
