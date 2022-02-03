const INIT_STATE = 0;

const counterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counterValue: state.counterValue + action.payload.newValue
      };
    case "DECREMENT":
      return {
        ...state,
        counterValue: state.counterValue - action.payload.newValue
      };
    case "ODD":
      const oddvalue = state.counterValue % 2 === 0 ? 0 : 1;
      return {
        ...state,
        counterValue: state.counterValue + oddvalue
      };

    case "ASYNC":
      return {
        ...state,
        counterValue: state.counterValue + action.payload.newValue
      };

    default:
      return state;
  }
};

export default counterReducer;
