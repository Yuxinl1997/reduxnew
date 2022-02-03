const incAction = () => {
  return {
    type: "INCREMENT",
    payload: {
      newValue: 1
    }
  };
};

const decAction = () => {
  return {
    type: "DECREMENT",
    payload: {
      newValue: 1
    }
  };
};

const oddAction = () => {
  return {
    type: "ODD",
    payload: {
      newValue: 1
    }
  };
};

const asyncAction = () => {
  return {
    type: "ASYNC",
    payload: {
      newValue: 1
    }
  };
};

const addItem = (input) => {
  console.log(1);
  return {
    type: "ADD",
    payload: input
  };
};

const changeInput = (input) => {
  return {
    type: "CHANGE",
    payload: input
  };
};

const deleteItem = (index) => {
  return {
    type: "DELETE",
    index
  };
};

export {
  incAction,
  decAction,
  oddAction,
  asyncAction,
  addItem,
  changeInput,
  deleteItem
};
