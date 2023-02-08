import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./Keyboard.css";
function Keyboard() {
  const { dispatch } = useGuessWordProvider();
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const { state } = useGuessWordProvider();
  const { guessedWords, currentWord } = state;
  console.log(guessedWords[currentWord].word.length);
  return (
    <div className="keyboard">
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
          onClick={() =>
            currentWord < 6 && guessedWords[currentWord].word[4] !== ""
              ? dispatch({ type: "ENTER_WORD" })
              : null
          }
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
