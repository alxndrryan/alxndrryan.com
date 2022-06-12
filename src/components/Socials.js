import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {
  return (
    <div className="socials-container hide-sm">
      <ul>
        <li>
          <div className="socials-line"></div>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-file" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-award" />
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Socials;
