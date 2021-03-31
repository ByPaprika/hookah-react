const initialState = {
  activeItemHeader: null,
  activeItemMenu: null,
};

const headerMenu = (state = initialState, action) => {
  if (action.type === 'SET_HEADER_ITEM') {
    return {
      ...state,
      activeItemHeader: action.payload,
    };
  }
  if (action.type === 'SET_MENU_ITEM') {
    return {
      ...state,
      activeItemMenu: action.payload,
    };
  }
  return state;
};

export default headerMenu;
