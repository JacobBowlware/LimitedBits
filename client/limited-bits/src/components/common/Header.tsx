import { useState } from "react";
import { Link } from "react-router-dom";

import { User } from '../../App';
import LimitedBitsLogo from '../../assets/LimitedBitsLogo.png';

// Font Awesome
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ user }: { user: User | null }) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    if (user !== null) {
        return (
            <div className="section-container  navbar-container">
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
                            <Link className="nav-item nav-link" to="/auth-home">Feed</Link>
                            <Link className="nav-item nav-link" to="/my-bits">My Bits</Link>
                            <Link className="nav-item nav-link" to="/profile">Profile</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    return (
        <div className="section-container  navbar-container">
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
                        <a className="nav-item nav-link active" href="/#features">Features<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/#reviews">Reviews</a>
                        <Link className="nav-item nav-link" to="/login">Log In</Link>
                        <Link className="nav-item nav-link" to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;