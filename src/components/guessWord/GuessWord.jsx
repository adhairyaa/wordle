import React from "react";
import { useGuessWordProvider } from "../../context/GuessWordProvider";
import "./GuessWord.css";
function GuessWord({ randomWord, guessNumber }) {
  const randomWordArr = randomWord.split("");
  const { state } = useGuessWordProvider();
  const { guessedWords } = state;
  const wordsToShow = guessedWords[guessNumber].word;
  return (
    <div className="guess-word">
      {wordsToShow.join("") === randomWord && <h1> You Won!🎉</h1>}
      {console.log(wordsToShow.join(""))}
      {wordsToShow.map((letter, index) => (
        <div
          className="letter-box"
          style={{
            backgroundColor:
              guessedWords[guessNumber].isEntered === false
                ? "darkgray"
                : letter === randomWordArr[index]
                ? "green"
                : randomWordArr.includes(letter)
                ? "gold"
                : "grey",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default GuessWord;
