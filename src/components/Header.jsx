import { Link } from "react-router-dom";

export default function Header() {
    return (<>
    <header>
        <div className="navbar">
            <Link to="/">Homepage</Link>
            <Link to="/chisiamo">Chi siamo</Link>
            <Link to="/listposts">Lista dei Post</Link>
        </div>
    </header>
    </>)
};
