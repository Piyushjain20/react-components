import TrollFace from "../assets/Troll Face.png";
import "../css/NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <img src={TrollFace} alt="Troll Face" />
      <h1>Meme Generator</h1>
      <p>React Course - Project 3</p>
    </nav>
  );
}
