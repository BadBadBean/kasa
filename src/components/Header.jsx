import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1>
                <img className="logo" src="src/assets/logo/logo.png" alt="Kasa"/>
            </h1>    
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/a-propos">A propos</NavLink></li>
            </ul>
        </header>
    )
}