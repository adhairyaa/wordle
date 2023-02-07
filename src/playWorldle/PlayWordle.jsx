import "./PlayWordle.css";
import words from "../words/words.json";
import GuessWord from "../guessWord/GuessWord";
function PlayWordle() {
  const randomWord = words[Math.random().toString().substring(3, 6)];

  return (
    <div className="Play-Wordle">
      <GuessWord randomWord={randomWord} guessedWord={} />
      <GuessWord randomWord={randomWord} guessedWord={} />
      <GuessWord randomWord={randomWord} guessedWord={} />
      <GuessWord randomWord={randomWord} guessedWord={} />
      <GuessWord randomWord={randomWord} guessedWord={} />
      <GuessWord randomWord={randomWord} guessedWord={} />
    </div>
  );
}

export default PlayWordle;
