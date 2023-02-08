import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./GuessWord.css";
function GuessWord({ randomWord, guessNumber }) {
  const randomWordArr = randomWord.split("");
  const { state } = useGuessWordProvider();
  const { guessedWords, currentLetter, currentWord } = state;
  const wordsToShow = guessedWords[guessNumber].word;
  const bgColor = (letter, index) => {
    return guessedWords[guessNumber].isEntered === false
      ? "lightgrey"
      : letter === randomWordArr[index]
      ? "green"
      : randomWordArr.includes(letter)
      ? "goldenrod"
      : "grey";
  };
  return (
    <div className="guess-word">
      {wordsToShow.map((letter, index) => (
        <div
          className="letter-box"
          style={{
            backgroundColor: bgColor(letter, index),
            color: guessedWords[guessNumber].isEntered && "white",
            border:
              currentLetter === index && currentWord === guessNumber
                ? "2px solid black"
                : "none",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default GuessWord;
