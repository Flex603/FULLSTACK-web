import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/count">Count</NavLink>
        <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
