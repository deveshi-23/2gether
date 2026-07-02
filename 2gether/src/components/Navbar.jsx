import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
       <input
        type="text"
        placeholder="Search people, skills, teams..."
      />

      <div>
        <Link to="/">Home</Link>

        <Link to="/discover">Explore</Link>

        <Link to="/inbox">Inbox</Link>

        <Link to="/profile">Profile</Link>

        <button>Create Team</button>
      </div>
    </nav>
  );
}

export default Navbar;