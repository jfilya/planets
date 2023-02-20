import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul>
        <li>
            <Link to="/">Solar</Link>
          </li>
          <li>
            <Link to="/Mercury-palent">Mercury</Link>
          </li>
          <li>
            <Link to="/Venus-palent">Venus</Link>
          </li>
          <li>
            <Link to="/Earth-palent">Earth</Link>
          </li>
          <li>
            <Link to="/Mars-palent">Mars</Link>
          </li>
          <li>
            <Link to="/Jupiter-palent">Jupiter</Link>
          </li>
          <li>
            <Link to="/Saturn-palent">Saturn</Link>
          </li>
          <li>
            <Link to="/Uranus-palent">Uranus</Link>
          </li>
          <li>
            <Link to="/Neptune-palent">Neptune</Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
