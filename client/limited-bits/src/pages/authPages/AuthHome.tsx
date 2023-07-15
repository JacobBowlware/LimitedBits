import { Link } from "react-router-dom";

const AuthHome = () => {
    return (
        <>
            <div className="section-container home-hero">
                <div className="section-container__item-grid">
                    <div className="section-container__item-grid__item align-left">
                        <h1 className="section-container__header home-hero__header-sm">
                            LimitedBits
                        </h1>
                        <h1 className="section-container__header home-hero__header">
                            New Age Social Media
                        </h1>
                        <p className="section-container__p home-hero__p">
                            Share your weekly bit of wisdom, info, or advice with the world. Make
                            it count though, because you can only post one bit per week.
                        </p>
                        <Link to="/sign-up" className="btn mt-2 home-hero__btn">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthHome;