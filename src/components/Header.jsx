import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Header() {
  return (
    <header>
      <h1>
        <img className="logo" src={logo} alt="Kasa" />
      </h1>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/a-propos">A propos</NavLink>
        </li>
      </ul>
    </header>
  );
}
