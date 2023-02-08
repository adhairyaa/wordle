import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./Keyboard.css";
function Keyboard({ randomWord }) {
  const { dispatch } = useGuessWordProvider();
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const { state } = useGuessWordProvider();
  const { guessedWords, currentWord, results } = state;
  const handleEnterClick = () => {
    currentWord < 6 &&
      guessedWords[currentWord].word[4] !== "" &&
      dispatch({ type: "ENTER_WORD" });
    currentWord < 5 &&
      guessedWords[currentWord].word.join("") === randomWord &&
      dispatch({
        type: "RESULTS",
        payload: `'YOU WON 🎉' 
          Word: ${randomWord}`,
      });
    currentWord === 5 &&
      (guessedWords[currentWord].word.join("") === randomWord
        ? dispatch({
            type: "RESULTS",
            payload: `'YOU WON 🎉' Word : 
            ${randomWord}`,
          })
        : dispatch({
            type: "RESULTS",
            payload: `'YOU LOST' Word : 
            ${randomWord}`,
          }));
  };
  return (
    <div className="keyboard">
      <h3>{results}</h3>
      <div>
        {keyboardKeys[0].map((letter) => (
          <button
            className="key"
            data-key={letter}
            onClick={() =>
              guessedWords[currentWord].word[4] === ""
                ? dispatch({ type: "ENTER_LETTER", payload: letter })
                : null
            }
          >
            {letter}
          </button>
        ))}
      </div>
      <div>
        {keyboardKeys[1].map((letter) => (
          <button
            className="key"
            data-key={letter}
            onClick={() =>
              guessedWords[currentWord].word[4] === ""
                ? dispatch({ type: "ENTER_LETTER", payload: letter })
                : null
            }
          >
            {letter}
          </button>
        ))}
      </div>
      <div>
        <button
          className="key"
          data-key={"Enter"}
          onClick={() => handleEnterClick()}
        >
          {"Enter"}
        </button>
        {keyboardKeys[2].map((letter) => (
          <button
            className="key"
            data-key={letter}
            onClick={() =>
              guessedWords[currentWord].word[4] === ""
                ? dispatch({ type: "ENTER_LETTER", payload: letter })
                : null
            }
          >
            {letter}
          </button>
        ))}
        <button
          className="key"
          data-key={"↩"}
          onClick={() => dispatch({ type: "GO_BACK" })}
        >
          {"↩"}
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
