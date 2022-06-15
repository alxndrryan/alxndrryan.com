import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ title, tech1, tech2, tech3, about, github, website }) => {
  return (
    <div className="project">
      <header>
        <ul className="project-links">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={website}
              className="socials-btn"
            >
              <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={github}
              className="socials-btn"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </li>
        </ul>
        <h3>{title}</h3>
        <ul className="tech-list">
          <li>{tech1}</li>
          <li>{tech2}</li>
          <li>{tech3}</li>
        </ul>
      </header>
      <footer>
        <p className="py-1">{about}</p>
      </footer>
    </div>
  );
};

export default Project;
