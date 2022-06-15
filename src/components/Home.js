import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner landing-inner-home">
          <h1 className="brand-m hide-lg">AH</h1>
          <h1 className="x-large hide-xsm">Hi, my name is Alexander Hogle.</h1>
          <h2 className="large hide-xsm">Full-Stack Web Developer.</h2>
          <p className="lead">Always building something new.</p>
          <div className="port-btn">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className="btn btn-primary my-3"
            >
              Portfolio
            </Link>
            <div className="line-1 hide-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
