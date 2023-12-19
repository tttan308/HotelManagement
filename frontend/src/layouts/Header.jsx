import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border border-red-500">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
