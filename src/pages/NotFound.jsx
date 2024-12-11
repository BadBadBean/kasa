import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h2 className="notfound_title">404</h2>
      <h3 className="notfound_subtitle">
        Oups ! La page que vous demandez n&apos;existe pas.
      </h3>
      <Link to="/" className="notfound_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
