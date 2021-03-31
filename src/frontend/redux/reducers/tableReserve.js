const initialState = {
  infoTable: {},
  infoEvent: {},
};

const headerMenu = (state = initialState, action) => {
  if (action.type === 'SET_INFO_TABLE') {
    return {
      ...state,
      infoTable: action.payload,
    };
  }
  if (action.type === 'SET_INFO_EVENT') {
    return {
      ...state,
      infoEvent: action.payload,
    };
  }
  return state;
};

export default headerMenu;
