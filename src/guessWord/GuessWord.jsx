import React from "react";

function GuessWord({ RandomWord, guessedWord }) {
  console.log(guessedWord);
  return (
    <div className="guess-word">
      {guessedWord.map((letter) => (
        <div className="letter-box">{letter}</div>
      ))}
    </div>
  );
}

export default GuessWord;
