import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-socials hide-lg">
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

      <p>Alexander Hogle ©2022</p>
    </footer>
  );
};

export default Footer;
