import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="nav">
                <img src="src/assets/logo/logo.png"/>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </nav>
        </>
    )
}