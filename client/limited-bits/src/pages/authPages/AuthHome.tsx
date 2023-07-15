
import { useState } from "react";
import { Link } from "react-router-dom";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlusSquare, faUser, faUserSecret, faUserTie } from "@fortawesome/free-solid-svg-icons";

// Components
import FeedCard from "../../components/common/FeedCard";

const feedBits = [
    [
        {
            id: 1,
            body: "Overwhelm resistance with speed and suddenness.",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
    ],
    [
        {
            id: 1,
            body: "PAGE 2",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
    ],
    [
        {
            id: 1,
            body: "PAGE 3",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
    ],
    [
        {
            id: 1,
            body: "PAGE 4",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
    ],
    [
        {
            id: 1,
            body: "PAGE 5",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
    ]
]

const AuthHome = () => {
    const feedLength = 5;
    const [feedIndex, setFeedIndex] = useState(0);

    /**
     * Changes feed page index to the given index, then updates the page routing 
     * buttons accordingly - mostly style changes.
     * @param index The feed page index to change to
     */
    const handleFeedIndexChange = (index: number) => {
        setFeedIndex(index);

        const leftFeedBtn = document.getElementById("feed-left-chevron");
        const rightFeedBtn = document.getElementById("feed-right-chevron");

        leftFeedBtn?.classList.remove("link-null");
        rightFeedBtn?.classList.remove("link-null");

        if (index === 0)
            leftFeedBtn?.classList.add("link-null");
        else if (index === feedLength - 1)
            rightFeedBtn?.classList.add("link-null");

        const feedNumBtns = document.getElementsByClassName("auth-home-feed-footer-nav__number");
        for (let i = 0; i < feedNumBtns.length; i++)
            feedNumBtns[i].classList.remove("link-null");

        feedNumBtns[index].classList.add("link-null");
    }

    return (
        <>
            <div className="section-container section-container-light section-container-tall">
                <div className="section-container__item ">
                    <div className="auth-home-header-container">
                        <h1 className="section-container__header text-highlight">
                            LimitedBits
                        </h1>
                        <div className="auth-home-header-icons">
                            <Link to="/" className="btn auth-home-header-btn">

                                Create Bit
                            </Link>
                        </div>
                    </div>
                    <div className="auth-home-feed">
                        {
                            feedBits[feedIndex].map((data, key) => {
                                if (key >= feedLength) {
                                    return;
                                }

                                return (
                                    <FeedCard key={key} icon={data.icon} body={data.body} username={data.username} />
                                )
                            })}
                        <div className="auth-home-feed-footer">
                            <FontAwesomeIcon icon={faChevronLeft}
                                id="feed-left-chevron"
                                className="link auth-home-feed-footer__icon" onClick={() => {
                                    if (feedIndex > 0)
                                        handleFeedIndexChange(feedIndex - 1);
                                }} />
                            <div className="auth-home-feed-footer-nav">
                                {
                                    feedBits.map((data, key) => {
                                        return (
                                            <button onClick={() => handleFeedIndexChange(key)} className="link auth-home-feed-footer-nav__number">
                                                {key + 1}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <FontAwesomeIcon icon={faChevronRight}
                                id="feed-right-chevron"
                                className="link auth-home-feed-footer__icon" onClick={() => {
                                    if (feedIndex < 4)
                                        handleFeedIndexChange(feedIndex + 1);
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthHome;