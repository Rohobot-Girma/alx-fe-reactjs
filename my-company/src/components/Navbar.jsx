import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ backgroundColor: "yellow" }}>
      <Link style={{ paddingRight: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/about">
        About
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/services">
        Services
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
