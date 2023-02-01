import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul>
          <li>
            <Link to="/Mercury">Mercury</Link>
          </li>
          <li>
            <Link to="/Venus">Venus</Link>
          </li>
          <li>
            <Link to="/Earth">Earth</Link>
          </li>
          <li>
            <Link to="/Mars">Mars</Link>
          </li>
          <li>
            <Link to="/Jupiter">Jupiter</Link>
          </li>
          <li>
            <Link to="/Saturn">Saturn</Link>
          </li>
          <li>
            <Link to="/Uranus">Uranus</Link>
          </li>
          <li>
            <Link to="/Neptune">Neptune</Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
