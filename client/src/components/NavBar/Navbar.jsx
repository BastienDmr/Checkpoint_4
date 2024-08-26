import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="paragraph-style">
          Acceuil
        </Link>
        <Link to="/" className="paragraph-style">
          Skills
        </Link>
        <Link to="/" className="paragraph-style">
          Projets
        </Link>
        <Link to="/contact" className="paragraph-style">
          Contact
        </Link>
        <Link to="/connexion" className="paragraph-style">
          Connexion
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
