import "./PlayWordle.css";
import words from "../words/words.json";
import GuessWord from "../components/guessWord/GuessWord";
import Keyboard from "../components/keyboard/Keyboard";

function PlayWordle() {
  const randomWord = words[Math.random().toString().substring(3, 6)];

  return (
    <div className="Play-Wordle">
      <h2>Wordle</h2>
      <div className="word-board">
        <GuessWord randomWord={randomWord} guessNumber={0} />
        <GuessWord randomWord={randomWord} guessNumber={1} />
        <GuessWord randomWord={randomWord} guessNumber={2} />
        <GuessWord randomWord={randomWord} guessNumber={3} />
        <GuessWord randomWord={randomWord} guessNumber={4} />
        <GuessWord randomWord={randomWord} guessNumber={5} />
      </div>
      <Keyboard randomWord={randomWord} />
    </div>
  );
}

export default PlayWordle;
