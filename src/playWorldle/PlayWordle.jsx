import "./PlayWordle.css";
import words from "../words/words.json";
function PlayWordle() {
  const randomWord = words[Math.random().toString().substring(3, 6)];
  console.log(randomWord);
  return <div className="Play-Wordle"></div>;
}

export default PlayWordle;
