import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./GuessWord.css";
function GuessWord({ randomWord, guessNumber }) {
  const randomWordArr = randomWord.split("");
  const { state } = useGuessWordProvider();
  const { guessedWords, currentLetter, currentWord } = state;
  const wordsToShow = guessedWords[guessNumber].word;
  return (
    <div className="guess-word">
      {wordsToShow.join("") === randomWord && <h1> You Won!🎉</h1>}

      {wordsToShow.map((letter, index) => (
        <div
          className="letter-box"
          style={{
            backgroundColor:
              guessedWords[guessNumber].isEntered === false
                ? "white"
                : letter === randomWordArr[index]
                ? "green"
                : randomWordArr.includes(letter)
                ? "goldenrod"
                : "grey",
            color: guessedWords[guessNumber].isEntered && "white",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default GuessWord;
