const Portfolio = () => {
  return (
    <section className="container">
      <div className="landing-inner">
        <h1 className="large">Portfolio</h1>
        <div className="portfolio-container">
          <ul className="projects-grid">
            <li>
              <div>
                <h3>React</h3>
              </div>
            </li>
            <li>
              <div>
                <h3>MERN</h3>
              </div>
            </li>
            <li>
              <div>
                <h3>MongoDB</h3>
              </div>
            </li>
            <li>
              <div>
                <h3>GraphQL</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
