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
      let skippedGuessedWords = [...state.guessedWords];
      skippedGuessedWords[state.currentWord].word[state.currentLetter - 1] = "";
      return {
        ...state,
        currentLetter:
          state.guessedWords[state.currentWord].word[state.currentLetter] ===
            "" && state.currentLetter > 0
            ? state.currentLetter - 1
            : state.currentLetter,
        guessedWords: skippedGuessedWords,
      };
    case "ENTER_WORD":
      let enteredGuessedWord = [...state.guessedWords];
      enteredGuessedWord[state.currentWord].isEntered = true;
      return {
        ...state,
        currentWord:
          state.currentWord < 5 ? state.currentWord + 1 : state.currentWord,
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
