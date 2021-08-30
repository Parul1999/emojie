import { useState } from "react";
import "./styles.css";

var emojieDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "French Fries",
  "🌭": "Hotdog",
  "🍿": "Popcorn",
  "🥓": "Bacon",
  "🥚": "Egg",
  "🧇": "Waffle",
  "🥞": "Pancakes",
  "🧈": "Butter"
};
const emojis = Object.keys(emojieDictionary);
export default function App() {
  const [emojie, setEmojie] = useState("");
  const [emojieMeaning, setEmojieMeaning] = useState(
    "Translation will apear here !!"
  );

  function emojieFindClick(item) {
    setEmojieMeaning(emojieDictionary[item]);
  }

  function emojieFindInput(e) {
    if (e.target.value !== undefined) {
      let item = e.target.value;
      if (emojieDictionary[item] !== undefined) {
        setEmojie(item);
        setEmojieMeaning(emojieDictionary[item]);
      } else {
        //on backspace if last emojie is removed
        setEmojie("");
        setEmojieMeaning("Try Something specific !!");
      }
    }
  }
  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
        placeholder={"Search your emoji"}
        onChange={(e) => emojieFindInput(e)}
      />
      <h2>{emojie}</h2>
      <h3>{emojieMeaning}</h3>
      {emojis.map((item) => {
        return (
          <span
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            onClick={() => emojieFindClick(item)}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
