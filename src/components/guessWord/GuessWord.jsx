import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./GuessWord.css";
function GuessWord({ RandomWord, guessNumber }) {
  // const RandomWordArr = RandomWord.split();
  const { state } = useGuessWordProvider();
  const { guessedWords } = state;
  return (
    <div className="guess-word">
      {guessedWords[guessNumber].map((letter) => (
        <div className="letter-box">{letter}</div>
      ))}
    </div>
  );
}

export default GuessWord;
