import { createContext, useContext, useReducer } from "react";

const GuessWordContext = createContext();

const handleDispatch = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return (state = {
        ...state,
        sortBy: "LOW_TO_HIGH",
      });

    default:
      return state;
  }
};
export function GuessWordProvider({ children }) {
  const [state, dispatch] = useReducer(handleDispatch, {
    sortBy: null,
    gender: [],
    size: [],
  });

  return (
    <GuessWordContext.Provider value={{ state, dispatch }}>
      {children}
    </GuessWordContext.Provider>
  );
}

const useGuessWordProvider = () => useContext(GuessWordContext);

export { useGuessWordProvider };
