import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {
  return (
    <div className="socials-container hide-sm">
      <ul>
        <li>
          <div className="socials-line"></div>
        </li>
        <li>
          <a href="#" className="socials-btn">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href="#" className="socials-btn">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="#" className="socials-btn">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#" className="socials-btn">
            <FontAwesomeIcon icon="fa-solid fa-file" />
          </a>
        </li>
        <li>
          <a href="#" className="socials-btn">
            <FontAwesomeIcon icon="fa-solid fa-award" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
