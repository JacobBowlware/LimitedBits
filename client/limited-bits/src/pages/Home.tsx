import { faCompass, faMedal, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ValueCard from "../components/common/ValueCard";

const Home = () => {
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
                        <button className="btn mt-2">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className="section-container home-value">
                <div className="section-container__item-grid section-container__item-grid-3col">
                    <ValueCard icon={faShareSquare} header="Share Your Bits" body="Share your 
                    thoughts, experiences, and insights with the community. Each week, 
                    you can post a single bit that captures your most valuable lesson, 
                    favorite quote, or interesting fact." highlight={false} />
                    <ValueCard icon={faCompass} header="Discover Bits" body="Uncover a collection of inspiring bits 
                    contributed by fellow members. Delve into a wealth of wisdom, from 
                    life lessons to motivational quotes." highlight={false} />
                    <ValueCard icon={faMedal} header="Quality > Quantity" body="Embrace a platform that prioritizes quality over quantity. 
                    With a limit of one bit per week, we foster a community focused 
                    on thoughtful and valuable contributions." highlight={true} />
                </div>
            </div>
            <div className="section-container home-feed">

            </div>
        </>
    );
}

export default Home;