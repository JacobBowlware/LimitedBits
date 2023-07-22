import { Link } from "react-router-dom";
import { User } from "../../App";

const Footer = ({ user }: { user: User | null }) => {
    if (user) {
        return (
            <div className="footer section-container  mb-0 pb-3 pt-3">
                <div className="footer-container">
                    <Link className="footer-container__link" to="/about">Home</Link>
                    <Link className="footer-container__link" to="/about">Feed</Link>
                    <Link className="footer-container__link" to="/contact">My Bits</Link>
                    <Link className="footer-container__link" to="/contact">Profile</Link>
                </div>
            </div>
        )
    }


    return (
        <div className="footer section-container  mb-0 pb-3 pt-3">
            <div className="footer-container">
                <Link className="footer-container__link" to="/about">Login</Link>
                <Link className="footer-container__link" to="/contact">Sign Up</Link>
            </div>
        </div>
    );
}

export default Footer;