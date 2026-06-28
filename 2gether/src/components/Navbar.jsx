import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>2gether</h2>

      <Link to="/">Home</Link>
      <Link to="/discover">Discover</Link>
      <Link to="/create-team">Create Team</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;