const defaultState = {
  input: "",
  list: [],
  index: 1
};
const todolistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        input: action.payload
      };
    case "ADD":
      return {
        ...state,
        list: [...state.list, action.payload],
        input: ""
      };
    case "DELETE":
      const filterTodo = state.list.filter(
        (item, index) => index !== action.index
      );
      return {
        ...state,
        list: filterTodo
      };
    default:
      return state;
  }
};

export default todolistReducer;
