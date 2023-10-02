import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter((counter) => counter + 1);
  const dec = () => setCounter((counter) => counter - 1);
  const rnd = () => setCounter(Math.round(Math.random() * 100 - 50));
  const res = () => setCounter(0);

  return (
    <div className="app">
      <h1 className="app__title">Counter</h1>
      <div className="app__body">
        <div className="app__counter">{counter}</div>
        <div className="app__buttons">
          <button className="app__button" onClick={inc}>
            INC
          </button>
          <button className="app__button" onClick={dec}>
            DEC
          </button>
          <button className="app__button" onClick={rnd}>
            RND
          </button>
          <button className="app__button" onClick={res}>
            RES
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
