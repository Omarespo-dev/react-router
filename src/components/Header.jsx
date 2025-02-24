// Importo i componenti del router di react
import { Link, NavLink } from "react-router-dom";

// Esporto La funzione Header con i navLink
export default function Header() {
    return (<>
    <header>
        <div className="navbar">
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/chisiamo">Chi siamo</NavLink>
            <NavLink to="/listposts">Lista dei Post</NavLink>
        </div>
    </header>
    </>)
};
