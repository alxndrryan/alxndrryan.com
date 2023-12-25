import Project from './Project';

const Portfolio = () => {
  return (
    <section className="container">
      <div className="landing-inner">
        <h1 id="portfolio" className="medium">
          Portfolio
        </h1>
        <div className="portfolio-container">
          <ul className="projects-grid">
            <li className="project-item">
              <Project
                github="https://github.com/alxndrryan/react_native_jobs"
                website="exp://u.expo.dev/update/6c232df9-54b3-4414-871f-b7297aad12dc"
                title="React Native Jobs"
                tech1="React"
                tech2="MongoDB"
                tech3="Expo"
                about="Mobile application that allows users to search and apply for jobs using Rapid API."
              />
            </li>
            <li className="project-item">
              <Project
                github="https://github.com/alxndrryan/dev-connector"
                website="https://secure-scrubland-55057.herokuapp.com/"
                title="DevConnector"
                tech1="React"
                tech2="MongoDB"
                tech3="Node.js"
                about="Social media platform for developers. Users are able to register to the site, create a profile, and write posts and comments."
              />
            </li>
            <li className="project-item">
              <Project
                github="https://github.com/alxndrryan/UI-horror-db"
                website="https://alxndrryan.github.io/UI-horror-db/dist/"
                title="HorrorDB"
                tech1="React"
                tech2="MongoDB"
                tech3="Node.js"
                about="Search horror films and add your favorites to your profile page. View and comment on other user profiles."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
