import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/flowers">Flowers</Link>
      <Link to="/add-flower">Add Flower</Link>
    </nav>
  );
};

export default Navbar;
