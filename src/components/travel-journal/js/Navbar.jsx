import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthAmericas} className="logo" />
      <h1>my travel journal.</h1>
    </nav>
  );
}
