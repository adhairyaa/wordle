import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./GuessWord.css";
function GuessWord({ RandomWord, guessNumber }) {
  const { state } = useGuessWordProvider();
  const { guessedWords } = state;
  console.log(guessedWords);
  return (
    <div className="guess-word">
      {guessedWords[guessNumber].map((letter) => (
        <div className="letter-box">{letter}</div>
      ))}
    </div>
  );
}

export default GuessWord;
