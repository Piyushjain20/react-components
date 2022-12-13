import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/Rectangle 90.png";
import "../css/Info.css";
export default function Info() {
  return (
    <div className="info-container">
      <img src={profilePic} alt="Profile Pic" />
      <h2>Laura Smith</h2>
      <h4>Frontend Developer</h4>
      <h5>laurasmith.website</h5>
      <div className="btn-container">
        <button id="btn1">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>Email</span>
        </button>
        <button id="btn2">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
