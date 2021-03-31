const initialState = {
  data: [],
};

const nowData = (state = initialState, action) => {
  if (action.type === 'SET_NOW_DATA') {
    return {
      data: action.payload,
    };
  }

  return state;
};

export default nowData;
