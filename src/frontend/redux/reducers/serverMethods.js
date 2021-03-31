const initialState = {
  itemsTables: [],
  itemsEvents: [],
  itemsComp: [],
  token: '',
  isAuth: false,
};

const serverMethods = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TABLES_INFO':
      return {
        ...state,
        itemsTables: action.payload,
      };

    case 'SET_EVENTS_INFO':
      return {
        ...state,
        itemsEvents: action.payload,
      };

    case 'SET_COMP_INFO':
      return {
        ...state,
        itemsComp: action.payload,
      };

    case 'SET_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
export default serverMethods;
