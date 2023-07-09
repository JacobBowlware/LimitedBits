import { useState } from "react";
import LimitedBitsLogo from '../../assets/LimitedBitsLogo.png';

// Font Awesome
import { faBars, faShareFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    return (
        <div className="section-container">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                    <img src={LimitedBitsLogo} alt="LimitedBits Logo" className="navbar-brand__img" />
                </Link>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                >
                    <FontAwesomeIcon className="navbar-toggler-icon" icon={isNavCollapsed ? faBars : faXmark} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/#">Explore<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/#">Sign Up</a>
                        <a className="nav-item nav-link" href="/#">Log In</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;