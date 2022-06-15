import { Link } from 'react-scroll';

import BrandButton from './BrandButton';

const Navbar = () => {
  return (
    <nav className="navbar bg-medium navbar-m">
      <div></div>
      <BrandButton />
      <ul>
        <li>
          <Link to="about" spy={true} smooth="true" offset={-75} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth="true"
            offset={-75}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth="true"
            offset={-75}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
