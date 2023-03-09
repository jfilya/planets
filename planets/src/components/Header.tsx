import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [items, setItems] = React.useState(0);
  React.useEffect(() => {
  const links = document.querySelectorAll('li');
  links[items].classList.add('active-planets')
  links.forEach((link, index, array) => {
    link.onclick = () => {
      setItems(index);
      array.forEach(el => {
        el.classList.remove('active-planets')
      })
    }
  })
  
  
});
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
};
export default Header;
