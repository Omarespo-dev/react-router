import { Link, NavLink } from "react-router-dom";

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
