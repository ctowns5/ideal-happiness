import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  return (
    <ul className="nav nav-tabs">
      <Link to={"/"} className="nav-item" style={{ marginRight: "2rem" }}>
        About Me
      </Link>
      <Link to={"/Portfolio"} className="nav-item" style={{ marginRight: "2rem" }}>
        Portfolio
      </Link>
      <Link to={"/Resume"} className="nav-item" style={{ marginRight: "2rem" }}>
        Resume
      </Link>
      <Link
        to={"/Contact"}
        className="nav-item"
        style={{ marginRight: "2rem" }}
      >
        Contact
      </Link>
    </ul>
  );
}

export default Nav;
