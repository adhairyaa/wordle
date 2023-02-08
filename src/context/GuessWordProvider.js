import { createContext, useContext, useReducer } from "react";

const GuessWordContext = createContext();

const handleDispatch = (state, action) => {
  switch (action.type) {
    case "ENTER_LETTER":
      let updatedGuessedWords = [...state.guessedWords];
      updatedGuessedWords[state.currentWord].word[state.currentLetter] =
        action.payload;
      return {
        ...state,
        currentLetter: state.currentLetter + 1,
        guessedWords: updatedGuessedWords,
      };
    case "GO_BACK":
      let currentLetter = state.currentLetter - 1;
      let skippedGuessedWords = [...state.guessedWords];
      skippedGuessedWords[state.currentWord].word[state.currentLetter] = "";
      return {
        ...state,
        currentLetter: currentLetter,
        guessedWords: skippedGuessedWords,
      };
    case "ENTER_WORD":
      let enteredGuessedWord = [...state.guessedWords];
      enteredGuessedWord[state.currentWord].isEntered = true;
      return {
        ...state,
        currentWord: state.currentWord + 1,
        currentLetter: 0,
        guessedWords: enteredGuessedWord,
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
      { word: ["", "", "", "", ""], isEntered: false },
      { word: ["", "", "", "", ""], isEntered: false },
      { word: ["", "", "", "", ""], isEntered: false },
      { word: ["", "", "", "", ""], isEntered: false },
      { word: ["", "", "", "", ""], isEntered: false },
      { word: ["", "", "", "", ""], isEntered: false },
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
