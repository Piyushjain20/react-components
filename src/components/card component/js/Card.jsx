import Footer from "./Footer";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import "../css/Card.css";

function Card() {
  return (
    <div className="card-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
export default Card;
