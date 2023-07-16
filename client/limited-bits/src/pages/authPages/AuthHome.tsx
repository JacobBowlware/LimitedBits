
import { useEffect, useState } from "react";
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
            body: "Discovered the power of meditation. It has improved my focus and reduced stress.",
            username: "Mia",
            icon: faUser,
        },
        {
            body: "Took a risk and pursued a passion project. Passion fuels determination and creativity.",
            username: "Lucas",
            icon: faUserSecret,
        },
        {
            body: "Learned to embrace failure as a stepping stone towards success. Failure is a part of growth.",
            username: "Sophie",
            icon: faUserTie,
        },
        {
            body: "Explored a new skill and found joy in the learning process. Learning is a lifelong journey.",
            username: "Benjamin",
            icon: faUser,
        },
        {
            body: "Practiced mindfulness to stay present. Being present brings more joy to everyday moments.",
            username: "Evelyn",
            icon: faUserSecret,
        },
    ],
    [
        {
            body: "Learned a valuable lesson about perseverance today. It's all about taking small steps towards your goals.",
            username: "Alice",
            icon: faUser,
        },
        {
            body: "Discovered the power of positive affirmations. They can truly shift your mindset!",
            username: "John",
            icon: faUserSecret,
        },
        {
            body: "Read a fantastic book on personal finance. Saving money is the first step to financial freedom.",
            username: "Emily",
            icon: faUserTie,
        },
        {
            body: "Took a leap of faith and started my own side project. Excited about the possibilities!",
            username: "Michael",
            icon: faUser,
        },
        {
            body: "Embracing failure as a stepping stone towards success. Failure is a part of the journey.",
            username: "Sophia",
            icon: faUserSecret,
        },
    ],
    [
        {
            body: "Learned the importance of time management. Scheduling tasks makes me more productive.",
            username: "Eva",
            icon: faUser,
        },
        {
            body: "Discovered a new hobby that brings me joy. It's never too late to try something new!",
            username: "David",
            icon: faUserSecret,
        },
        {
            body: "Attended a life-changing seminar. Surrounding yourself with motivated individuals is inspiring.",
            username: "Olivia",
            icon: faUserTie,
        },
        {
            body: "Decided to embrace a growth mindset. Continuous learning leads to personal growth.",
            username: "Daniel",
            icon: faUser,
        },
        {
            body: "Overcame a fear by taking small steps. Courage is built one step at a time.",
            username: "Isabella",
            icon: faUserSecret,
        },
    ],
    [
        {
            body: "Practiced gratitude daily. It has improved my overall happiness and well-being.",
            username: "Noah",
            icon: faUser,
        },
        {
            body: "Learned the value of self-compassion. Being kind to oneself leads to greater resilience.",
            username: "Ava",
            icon: faUserSecret,
        },
        {
            body: "Started a journaling practice. Reflecting on my thoughts helps me gain clarity.",
            username: "James",
            icon: faUserTie,
        },
        {
            body: "Stepped outside my comfort zone and met new people. Networking can lead to exciting opportunities.",
            username: "Emma",
            icon: faUser,
        },
        {
            body: "Embraced a minimalist lifestyle. Simplifying my life has brought a sense of freedom.",
            username: "Liam",
            icon: faUserSecret,
        },
    ]
]

const AuthHome = () => {
    const feedLength = 5;
    const [feedIndex, setFeedIndex] = useState(0);

    useEffect(() => {
        // Initially the 0 index number should be highlighted, with the left chevron disabled as well.
        const leftFeedBtn = document.getElementById("feed-left-chevron");
        const feedNumBtns = document.getElementsByClassName("auth-home-feed-footer-nav__number");

        leftFeedBtn?.classList.add("link-null");
        feedNumBtns[0].classList.add("link-null");
    }, []);

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