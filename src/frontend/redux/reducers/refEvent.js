const initialState = {
  ref: '',
};

const refEvent = (state = initialState, action) => {
  if (action.type === 'SET_REF') {
    return {
      ref: action.payload,
    };
  }

  return state;
};

export default refEvent;
