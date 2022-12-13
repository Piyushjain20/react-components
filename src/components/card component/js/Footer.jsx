import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faSquareTwitter} className="icon" />
      <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
      <FontAwesomeIcon icon={faSquareInstagram} className="icon" />
      <FontAwesomeIcon icon={faSquareGithub} className="icon" />
    </footer>
  );
}
export default Footer;
