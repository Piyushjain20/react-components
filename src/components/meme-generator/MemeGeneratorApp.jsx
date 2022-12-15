import "./MemeGeneratorApp.css";
import NavBar from "./components/js/NavBar";
import Main from "./components/js/Main";
import Meme from "./components/js/Meme";
import memeData from "./components/assets/memesData";
import { useState, useEffect } from "react";

function App() {
  const [meme, setMeme] = useState({ top: "", bottom: "", memeData: null });

  const submitHandler = (e) => {
    e.preventDefault();
    let randomMemeIndex = Math.floor(memeData.data.memes.length * Math.random());
    setMeme({ top: e.target[0].value, bottom: e.target[1].value, memeData: memeData.data.memes[randomMemeIndex] });
  };
  useEffect(() => {}, [meme]);

  return (
    <div className="App">
      <NavBar />
      <Main submitHandler={submitHandler} />
      <Meme inputs={meme} />
    </div>
  );
}

export default App;
