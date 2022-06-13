import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-socials hide-lg">
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
      </ul>

      <p>Alexander Hogle ©2022</p>
    </footer>
  );
};

export default Footer;
