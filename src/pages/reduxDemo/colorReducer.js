import React, { createContext, useReducer } from "react";

export const ColorContext = createContext();

export const changeColor = "CHANGE_COLOR";

const reducer = (state, action) => {
  switch (action.type) {
    case changeColor:
      return action.color;
    default:
      return state;
  }
};

export function ColorReducer(props) {
  const [color, dispatch] = useReducer(reducer, "pink");
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
}
