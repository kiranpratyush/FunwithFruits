import "./styles.css";
import { useState } from "react";

export default function App() {
  let fruitDictionary = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "WaterMelon",
    "🍊": "Tangerine",
    "🍋": "Melon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🥕": "carrot",
    "🍅": "Tomato"
  };
  const [meaning, setMeaning] = useState("");
  let fruitArray = Object.keys(fruitDictionary);
  function listFruits() {
    return fruitArray.map((item) => (
      <li key={item} onClick={() => onClickHandler(item)}>
        {item}
      </li>
    ));
  }
  function onClickHandler(item) {
    if (item in fruitDictionary) {
      let newMeaning = fruitDictionary[item];
      setMeaning(newMeaning);
    }
  }
  function onChangeHandler(event) {
    let value = event.target.value;
    if (value in fruitDictionary) {
      let newMeaning = fruitDictionary[value];
      setMeaning(newMeaning);
    } else {
      let newMeaning = "We don't have the fruit in our database";
      setMeaning(newMeaning);
    }
  }
  return (
    <div className="App">
      <h1>Fun with Fruits</h1>

      <div>
        <h2>Enter a fruit or choose any fruit below to know its name</h2>
      </div>
      <input type="text" onChange={(event) => onChangeHandler(event)} />
      <div className="meaning">{meaning}</div>
      <div className="Fruits">
        <ul className="fruit-List">{listFruits()}</ul>
      </div>
    </div>
  );
}
