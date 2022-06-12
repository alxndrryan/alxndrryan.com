const Project = ({ title, tech1, tech2, tech3, about }) => {
  return (
    <div className="project">
      <header>
        <h3>{title}</h3>
        <ul className="tech-list">
          <li>{tech1}</li>
          <li>{tech2}</li>
          <li>{tech3}</li>
        </ul>
      </header>
      <footer>
        <p>{about}</p>
      </footer>
    </div>
  );
};

export default Project;
