import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="nav">
                <img className="logo" src="src/assets/logo/logo.png"/>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/a-propos">A propos</NavLink></li>
                </ul>
            </nav>
        </>
    )
}