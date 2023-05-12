import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <Link className="site-logo" to="/">#Vanlife</Link>
            <nav>
                <Link to="/host">Host</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>

    )
}