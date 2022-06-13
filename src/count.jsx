import React from "react";
const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

const Count = () => {
  const [number, updateNumber] = React.useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case OPERATIONS.ADD:
        return {
          ...state,
          number: action.number,
        };
      case OPERATIONS.SUBTRACT:
        return {
          ...state,
          number: action.number,
        };
      default:
    }
    return state;
  };
  const [state, dispatch] = React.useReducer(reducer, {number:number});

  /* implement dispatches */
  const add = () => dispatch({ type: OPERATIONS.ADD, number: state.number + 1 });

  const subtract = () =>
    dispatch({ type: OPERATIONS.SUBTRACT, number: state.number - 1 });

  const handleNumberChange = (e) => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state.number}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
};
export default Count;
