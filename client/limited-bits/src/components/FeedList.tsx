import { useEffect, useState } from "react";

// Font Awesome Icons
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import FeedCard from "./common/FeedCard";

interface FeedCardProps {
    username: string;
    body: string;
    icon: IconProp;
    id?: number;
}

interface FeedListProps {
    feedItems: FeedCardProps[][];
}

const FeedList = ({ feedItems }: FeedListProps) => {
    const [feedIndex, setFeedIndex] = useState<number>(0);
    const [feedLength, setFeedLength] = useState<number>(feedItems.length);

    useEffect(() => {
        // Initially the 0 index number should be highlighted, with the left chevron disabled as well.
        const leftFeedBtn = document.getElementById("feed-left-chevron");
        const feedNumBtns = document.getElementsByClassName("auth-home-feed-footer-nav__number");

        leftFeedBtn?.classList.add("link-null");
        feedNumBtns[0].classList.add("link-null");
    }, []);

    // Handles all feed index changes & updates styling accordingly.
    const handleFeedIndexChange = (index: number) => {
        setFeedIndex(index);

        const leftFeedBtn = document.getElementById("feed-left-chevron");
        const rightFeedBtn = document.getElementById("feed-right-chevron");

        leftFeedBtn?.classList?.remove("link-null");
        rightFeedBtn?.classList?.remove("link-null");

        if (index === 0)
            leftFeedBtn?.classList?.add("link-null");
        else if (index === feedLength - 1)
            rightFeedBtn?.classList?.add("link-null");

        const feedNumBtns = document.getElementsByClassName("auth-home-feed-footer-nav__number");
        for (let i = 0; i < feedNumBtns.length; i++)
            feedNumBtns[i].classList?.remove("link-null");

        feedNumBtns[index].classList?.add("link-null");
    }

    return (
        <div className="auth-home-feed">
            {
                feedItems[feedIndex].map((data, key) => {
                    if (key >= 5) {
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
                        feedItems.map((data, key) => {
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
    );
}

export type { FeedCardProps };
export default FeedList;