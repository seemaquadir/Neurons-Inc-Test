import React from "react";
import "./styles.css";
import getRandomFruitsName from "random-fruits-name";

export default function App() {
  return (
    <div className="App">
      <h1>Random Fruits name with React example</h1>
      <h2>This npm package of generate the names of random fruits.</h2>
      <p>{getRandomFruitsName() /* English is default language */}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
      <p>{getRandomFruitsName("en")}</p>
    </div>
  );
}
