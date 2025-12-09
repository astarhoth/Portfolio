import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Vitória Dev</h1>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sobre" className="nav-link">Sobre</Link>
        <Link to="/projetos" className="nav-link">Projetos</Link>
      </nav>
    </header>
  );
}
