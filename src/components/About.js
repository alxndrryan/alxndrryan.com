import profile from '../img/me-img.jpeg';

const About = () => {
  return (
    <section className="container">
      <div className="landing-inner">
        <h1 className="large">About</h1>
        <div className="about-container">
          <div className="about-text-container">
            <p>
              I am a Full-Stack Web Developer located in Austin, TX. Creating is
              what I love to do, namely websites.
            </p>
            <p>
              Other things I love to create include music and fantasy worlds in
              Dungeons & Dragons.
            </p>
            <ul className="skills-list">
              <li>- JavaScript (ES6+)</li>
              <li>- React</li>
              <li>- Node.js</li>
              <li>- GraphQL</li>
              <li>- MongoDB</li>
              <li>- React Native</li>
            </ul>
          </div>

          <img src={profile} alt="Me." />
        </div>
      </div>
    </section>
  );
};

export default About;
