import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="section-container  mb-0 pb-3 pt-3">
            <div className="footer-container">
                <Link className="footer-container__link" to="/about">About</Link>
                <Link className="footer-container__link" to="/contact">Contact</Link>
                <Link className="footer-container__link" to="/terms-of-service">Terms of Service</Link>
                <Link className="footer-container__link" to="/privacy-policy">Privacy Policy</Link>
            </div>
        </div>
    );
}

export default Footer;