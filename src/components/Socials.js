import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {
  return (
    <div className="socials-container hide-sm">
      <ul>
        <li>
          <div className="socials-line"></div>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/alxndrryan"
            className="socials-btn"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/alexander-hogle/"
            className="socials-btn"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/alxndrryan"
            className="socials-btn"
          >
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1HiF-alFoNPCSx97_iywN84fQRC_syTvq/view?usp=sharing"
            className="socials-btn"
          >
            <FontAwesomeIcon icon="fa-solid fa-file" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1JQNyH1WW3EMYmm2dEBMudAxJF-HSTZ6A/view?usp=sharing"
            className="socials-btn"
          >
            <FontAwesomeIcon icon="fa-solid fa-award" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
