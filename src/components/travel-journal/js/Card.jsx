import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../css/Card.css";

export default function Card(props) {
  const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;
  return (
    <>
      <div className="card">
        <img src={imageUrl} alt={`${title} Image`} />
        <div className="card-body">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="pin" />
            <span className="location">{location}</span>
            <a href={googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </p>
          <h2>{title}</h2>
          <p className="period">
            {startDate} - {endDate}
          </p>
          <p className="info">{description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
