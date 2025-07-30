import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CodeGrimoire</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/snippets">Snippets</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <Link to="/dsa-library" className="nav-link text-emerald-300 hover:text-white">
  DSA Grimoire
</Link>


        <Link to="/dashboard" className="nav-link">Dashboard</Link>

      </ul>
    </nav>
  );
};

export default Navbar;
