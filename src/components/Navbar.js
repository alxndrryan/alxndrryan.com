import BrandButton from './BrandButton';

const Navbar = () => {
  return (
    <nav className="navbar bg-medium navbar-m">
      <div></div>
      <BrandButton />
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
