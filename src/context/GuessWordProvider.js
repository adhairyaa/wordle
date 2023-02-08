import { createContext, useContext, useReducer } from "react";

const GuessWordContext = createContext();

const handleDispatch = (state, action) => {
  switch (action.type) {
    case "ENTER_LETTER":
      let updatedGuessedWords = [...state.guessedWords];
      updatedGuessedWords[state.currentWord][state.currentLetter] =
        action.payload;
      return {
        ...state,
        currentLetter: state.currentLetter + 1,
        guessedWords: updatedGuessedWords,
      };

    default:
      return state;
  }
};
export function GuessWordProvider({ children }) {
  const [state, dispatch] = useReducer(handleDispatch, {
    currentWord: 0,
    currentLetter: 0,
    guessedWords: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
  });

  return (
    <GuessWordContext.Provider value={{ state, dispatch }}>
      {children}
    </GuessWordContext.Provider>
  );
}

const useGuessWordProvider = () => useContext(GuessWordContext);

export { useGuessWordProvider };
