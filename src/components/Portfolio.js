import Project from './Project';

const Portfolio = () => {
  return (
    <section className="container">
      <div className="landing-inner">
        <h1 className="medium">Portfolio</h1>
        <div className="portfolio-container">
          <ul className="projects-grid">
            <li className="project-item">
              <Project />
            </li>
            <li>
              <Project />
            </li>
            <li>
              <Project />
            </li>
            <li>
              <Project />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
