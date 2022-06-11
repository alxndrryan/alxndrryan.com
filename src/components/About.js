import profile from '../img/me-img.jpeg';

const About = () => {
  return (
    <section className="container">
      <div className="landing-inner">
        <h1 className="medium">About</h1>
        <div className="about-container">
          <div className="about-text-container">
            <div className="text-1">
              <p className="my-1">
                I am a Full-Stack Web Developer located in Austin, TX. Creating
                is what I love to do, namely websites.
              </p>
              <p>
                I enjoy making websites that are both intuitive and attractive
                to users. Currently, my favorite development stack to work with
                is React, Express.js, MongoDB, and Node.js.
              </p>
              <p className="my-1">
                Other things I love to create include music and fantasy worlds
                in Dungeons & Dragons.
              </p>
              <p>Recent Technologies:</p>
            </div>
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
