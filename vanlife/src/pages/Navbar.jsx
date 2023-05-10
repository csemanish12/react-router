import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <Link className="site-logo" to="/">#Vanlife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>

    )
}