import React from 'react';
import { useReducer, useContext } from "react";

const ThemeContext = React.createContext();

const initialState = {darkMode: false};

function reducer(state, action) {
  switch (action.type) {
    case "LIGHTMODE":
      return {darkMode: false};
    case "DARKMODE":
      return {darkMode: true};
    case "TOGGLE":
      return {darkMode: !state.darkMode};
    default:
      return state;
  }
}

const ThemeProvider = (props) => {
  const [theme, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{theme, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export { ThemeContext, ThemeProvider }